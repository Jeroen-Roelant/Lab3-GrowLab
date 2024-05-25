import { Test, TestingModule } from '@nestjs/testing';
import { MatchContentController } from './match-content.controller';
import { MatchContentService } from './match-content.service';

describe('MatchContentController', () => {
  let controller: MatchContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchContentController],
      providers: [MatchContentService],
    }).compile();

    controller = module.get<MatchContentController>(MatchContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
