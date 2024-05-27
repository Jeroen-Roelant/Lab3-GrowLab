import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':UUID')
  async findOne(@Param('UUID') UUID: string) {
    try {
      return await this.commentService.findOne(UUID);
    }
    catch (error) {
      return new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':UUID')
  async update(@Param('UUID') UUID: string, @Body() updateCommentDto: UpdateCommentDto) {
    try{
      return await this.commentService.update(UUID, updateCommentDto);
    }
    catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.commentService.remove(UUID);
  }
}
