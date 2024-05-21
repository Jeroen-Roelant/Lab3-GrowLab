import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { UserService } from 'src/user/user.service';
import { CommentService } from 'src/comment/comment.service';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UserService,
    private commentService: CommentService,

  ) {}

  create(createPostDto: CreatePostDto) {
    const post = new Post();
    Object.assign(post, createPostDto);
    post.UUID = uuidv4();
    this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  async findOne(UUID: string) {
    const resPost = await this.postRepository.findOneBy({ UUID });
    // console.log(UUID);
    try {
      const cIds = resPost.comments.split(',');
      let comments = [];
      cIds.forEach(cUUID => {
        comments.push(this.commentService.findOne(cUUID));
      });
    }
    catch (error) {
      console.error(error);
    }

    // let poster = await this.userService.findOne(resPost.poster);
    // console.log(resPost);
    return resPost;
    
  }

  async findCommentsForOne(UUID: string) {
    const resPost = await this.postRepository.findOneBy({ UUID });
  
    const cIds = resPost.comments.split(',');
    
    const comments = await Promise.all(
      cIds.map(async cUUID => {
        let comment: LooseObject = await this.commentService.findOne(cUUID);
  
        if (comment) {
          let user = await this.userService.findOne(comment.poster);
          
          if (user) {
            comment.posterName = `${user.firstName} ${user.lastName}`;
            comment.posterImage = user.profilePictureUrl;
          }
  
          return comment;
        }
      })
    );
  
    comments.pop();
  
    // Filter out null or undefined comments
    return comments.filter(comment => comment);
  }

  async forCoachesByMember(UUID: string) {
    try {
      const user = await this.userService.findOne(UUID);

      const csvData = user.connectionsCoaches.split(',');

      let posts = [];

      await Promise.all(csvData.map(async (coach) => { 
        const coachPosts = await this.postRepository.find({
          where: {
            poster: coach
          }
        });
        coachPosts.forEach((post) => {
          posts.push(post);
        });
      }));
      return posts;
    }
    catch (error) {
      console.error(error);
    }
  }

  update(UUID: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(UUID, updatePostDto);
  }

  async addLike(UUID: string, likeUUID: string) {
    const post = await this.postRepository.findOneBy({ UUID });
    if (!post.likes.includes(likeUUID)) {
      post.likes += likeUUID + ',';
      this.postRepository.save(post);
      return 1;
    }
    else {
      post.likes = post.likes.replace(likeUUID + ',', '');
      this.postRepository.save(post);
      return -1;
    }
  }

  async addComment(UUID: string, createCommentDto: CreateCommentDto) {
    const post = await this.postRepository.findOneBy({ UUID });

    const comment = await this.commentService.create(createCommentDto);
    post.comments += comment.UUID + ',';

    this.postRepository.save(post);
  }

  remove(UUID: string) {
    
  }
}