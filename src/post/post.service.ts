import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
    try{
      const post = new Post();
      Object.assign(post, createPostDto);
      post.UUID = uuidv4();
      return this.postRepository.save(post);
    }
    catch (error) {
      return error;
    }
  }

  // createForClass(createPostDto: CreatePostDto) {
  //   try{
  //     const post = new Post();
  //     Object.assign(post, createPostDto);
  //     post.UUID = uuidv4();
  //     this.postRepository.save(post);
  //   }
  //   catch (error) {
  //     return error;
  //   }
  // }

  findAll() {
    try{
      return this.postRepository.find();
    }
    catch (error) {
      return error;
    }
  }

  async findOne(UUID: string) {
    try{
      const resPost : LooseObject = await this.postRepository.findOneBy({ UUID });
      if (!resPost) {
        throw new NotFoundException(`Post with UUID ${UUID} not found`);
      }

      let user = await this.userService.findOne(resPost.poster);
      resPost.user = user;

      const cIds = resPost.comments.split(',');
      let comments = [];
      cIds.forEach(async cUUID => {
        let c = await this.commentService.findOne(cUUID);
        comments.push(c);
      });

      resPost.comments_obj = comments;
      return resPost; 
    }
    catch (error) {
      throw new Error(error);
    }
  }

  async findCommentsForOne(UUID: string) {
    try{
      const resPost = await this.postRepository.findOneBy({ UUID });
      if (!resPost) {
        throw new NotFoundException(`Post with UUID ${UUID} not found`);
      }
  
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
      return comments.filter(comment => comment);
    }
    catch (error) {
      return error;
    }
  }

  async forCoachesByMember(UUID: string) {
    try {
      const user = await this.userService.findOne(UUID);
      if (!user) {
        throw new NotFoundException(`User with UUID ${UUID} not found`);
      }

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
      return error;
    }
    
  }

  update(UUID: string, updatePostDto: UpdatePostDto) {
    try{
      return this.postRepository.update(UUID, updatePostDto);
    }
    catch (error) {
      return error;
    }
  }

  async addLike(UUID: string, likeUUID: string) {
    try{
      const post = await this.postRepository.findOneBy({ UUID });
      if (!post) {
        throw new NotFoundException(`Post with UUID ${UUID} not found`);
      }

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
    catch (error) {
      return error;
    }
    
  }

  async addComment(UUID: string, createCommentDto: CreateCommentDto) {
    try{
      const post = await this.postRepository.findOneBy({ UUID });
      if (!post) {
        throw new NotFoundException(`Post with UUID ${UUID} not found`);
      }

      const comment = await this.commentService.create(createCommentDto);
      post.comments += comment.UUID + ',';

      this.postRepository.save(post);
    }
    catch (error) {
      return error;
    }
  }

  remove(UUID: string) {
    
  }
}