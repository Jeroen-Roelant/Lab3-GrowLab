import { Module } from '@nestjs/common';
import { CoachClassService } from './coach-class.service';
import { CoachClassController } from './coach-class.controller';

@Module({
  controllers: [CoachClassController],
  providers: [CoachClassService],
})
export class CoachClassModule {}
