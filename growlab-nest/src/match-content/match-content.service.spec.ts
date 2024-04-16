import { Test, TestingModule } from '@nestjs/testing';
import { MatchContentService } from './match-content.service';

describe('MatchContentService', () => {
  let service: MatchContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchContentService],
    }).compile();

    service = module.get<MatchContentService>(MatchContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
