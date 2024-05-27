import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    try{  
      const comment = new Comment();
      Object.assign(comment, createCommentDto);
      comment.UUID = uuidv4();
      this.commentRepository.save(comment);
      return comment;
    }
    catch (error) {
      return error;
    }
  }

  findAll() {
    return this.commentRepository.find();
  }

  async findOne(UUID: string) {
    try{
      let c = await this.commentRepository.findOneBy({ UUID });
      if (!c) {
        throw new Error(`Comment ${UUID} not found`);
      }
      return c;
    }
    catch (error) {
      return error;
    }
  }

  async update(UUID: string, updateCommentDto: UpdateCommentDto) {
    try{
      return await this.commentRepository.update(UUID, updateCommentDto);
    }
    catch (error) {
      return error;
    }
  }

  remove(UUID: string) {
    
  }
}
