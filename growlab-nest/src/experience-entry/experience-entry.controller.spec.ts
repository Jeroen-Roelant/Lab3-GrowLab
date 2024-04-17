import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceEntryController } from './experience-entry.controller';
import { ExperienceEntryService } from './experience-entry.service';

describe('ExperienceEntryController', () => {
  let controller: ExperienceEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienceEntryController],
      providers: [ExperienceEntryService],
    }).compile();

    controller = module.get<ExperienceEntryController>(ExperienceEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
