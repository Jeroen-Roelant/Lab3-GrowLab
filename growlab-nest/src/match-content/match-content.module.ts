import { Module } from '@nestjs/common';
import { MatchContentService } from './match-content.service';
import { MatchContentController } from './match-content.controller';

@Module({
  controllers: [MatchContentController],
  providers: [MatchContentService],
})
export class MatchContentModule {}
