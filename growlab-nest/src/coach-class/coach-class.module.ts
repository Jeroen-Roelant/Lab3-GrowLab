import { Module } from '@nestjs/common';
import { CoachClassService } from './coach-class.service';
import { CoachClassController } from './coach-class.controller';
import { CoachClass } from './entities/coach-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from 'src/session/session.module';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoachClass]),
    SessionModule,
    PostModule
  ],
  controllers: [CoachClassController],
  providers: [CoachClassService],
})
export class CoachClassModule {}
