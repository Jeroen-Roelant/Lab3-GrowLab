import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UserService,

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

  findOne(UUID: string) {
    return this.postRepository.findOneBy({ UUID });
  }

  async forCoachesByMember(UUID: string) {
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

    posts.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

    return posts;
  }

  update(UUID: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(UUID, updatePostDto);
  }

  remove(UUID: string) {
    
  }
}
