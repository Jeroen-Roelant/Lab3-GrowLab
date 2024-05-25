import { Test, TestingModule } from '@nestjs/testing';
import { CoachClassService } from './coach-class.service';

describe('CoachClassService', () => {
  let service: CoachClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoachClassService],
    }).compile();

    service = module.get<CoachClassService>(CoachClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
