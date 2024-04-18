import { Module } from '@nestjs/common';
import { CoachClassService } from './coach-class.service';
import { CoachClassController } from './coach-class.controller';
import { CoachClass } from './entities/coach-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CoachClass])],
  controllers: [CoachClassController],
  providers: [CoachClassService],
})
export class CoachClassModule {}
