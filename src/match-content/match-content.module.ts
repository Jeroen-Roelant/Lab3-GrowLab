import { Module } from '@nestjs/common';
import { MatchContentService } from './match-content.service';
import { MatchContentController } from './match-content.controller';
import { MatchContent } from './entities/match-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MatchContent])],
  controllers: [MatchContentController],
  providers: [MatchContentService],
})
export class MatchContentModule {}
