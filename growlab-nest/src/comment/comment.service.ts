import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    this.commentRepository.save(createCommentDto);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(UUID: string) {
    return this.commentRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(UUID, updateCommentDto);
  }

  remove(UUID: string) {
    
  }
}