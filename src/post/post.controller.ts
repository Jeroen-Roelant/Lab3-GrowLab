import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, HttpStatus, HttpException } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { BadRequestException } from '@nestjs/common';


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req: any, @Body() createPostDto: CreatePostDto) {
    try {
      createPostDto.poster = req.user.sub;
      return await this.postService.create(createPostDto);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get()
  async findAll() {
    try{
      return this.postService.findAll();
    } 
    catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get(':UUID')
  async findOne(@Param('UUID') UUID: string) {
    try {
      return await this.postService.findOne(UUID);
    } catch (error) {
      return new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/comments/:UUID')
  async findCommentsForOne(@Param('UUID') UUID: string) {
    try{
      return await this.postService.findCommentsForOne(UUID);
    }
    catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard)
  @Post('/comment/:UUID')
  async makeComment(@Request() req: any, @Param('UUID') UUID: string, @Body() createCommentDto: CreateCommentDto) {
    try {
      createCommentDto.poster = req.user.sub;

      if (createCommentDto.content.trim().length === 0) {
        throw new BadRequestException('Comment cannot be empty');
      }
      await this.postService.addComment(UUID, createCommentDto);
      return HttpStatus.OK;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('forCoachesByMember/:UUID')
  async findByMember(@Param('UUID') UUID: string) {
    try{
      return await this.postService.forCoachesByMember(UUID);
    }
    catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Patch(':UUID')
  async update(@Param('UUID') UUID: string, @Body() updatePostDto: UpdatePostDto) {
    try{
      return await this.postService.update(UUID, updatePostDto);
    }
    catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    try {
      return this.postService.remove(UUID);
    }
    catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @UseGuards(AuthGuard)
  @Get('like/:UUID')
  async likePost(@Request() req: any, @Param('UUID') UUID: string) {
    try {
      return await this.postService.addLike(UUID, req.user.sub);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
