import { Test, TestingModule } from '@nestjs/testing';
import { CoachClassController } from './coach-class.controller';
import { CoachClassService } from './coach-class.service';

describe('CoachClassController', () => {
  let controller: CoachClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoachClassController],
      providers: [CoachClassService],
    }).compile();

    controller = module.get<CoachClassController>(CoachClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
