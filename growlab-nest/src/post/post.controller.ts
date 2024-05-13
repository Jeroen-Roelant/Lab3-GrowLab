import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Request() req: any, @Body() createPostDto: CreatePostDto) {
    try {
      createPostDto.poster = req.user.sub;
      return this.postService.create(createPostDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.postService.findOne(UUID);
  }

  @Get('forCoachesByMember/:UUID')
  findByMember(@Param('UUID') UUID: string) {
    return this.postService.forCoachesByMember(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(UUID, updatePostDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.postService.remove(UUID);
  }

  @UseGuards(AuthGuard)
  @Get('like/:UUID')
  likePost(@Request() req: any, @Param('UUID') UUID: string) {
    try {
      this.postService.addLike(UUID, req.user.sub);
      return HttpStatus.OK;
    } catch (error) {
      console.log(error);
    }
  }
}
