import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostController } from './post.controller';
import { Post } from './entities/post.entity';
import { UserModule } from 'src/user/user.module';
import { CommentModule } from 'src/comment/comment.module';
import { CoachClassModule } from 'src/coach-class/coach-class.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    forwardRef(() => UserModule),
    CommentModule,
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}
