import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceEntryService } from './experience-entry.service';

describe('ExperienceEntryService', () => {
  let service: ExperienceEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperienceEntryService],
    }).compile();

    service = module.get<ExperienceEntryService>(ExperienceEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
