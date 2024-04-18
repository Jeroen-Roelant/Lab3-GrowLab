import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    this.postRepository.save(createPostDto);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(UUID: string) {
    return this.postRepository.findOneBy({ UUID });
  }

  update(UUID: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(UUID, updatePostDto);
  }

  remove(UUID: string) {
    
  }
}
