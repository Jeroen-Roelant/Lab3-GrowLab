import { Test, TestingModule } from '@nestjs/testing';
import { PendingConnectionController } from './pending-connection.controller';
import { PendingConnectionService } from './pending-connection.service';

describe('PendingConnectionController', () => {
  let controller: PendingConnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendingConnectionController],
      providers: [PendingConnectionService],
    }).compile();

    controller = module.get<PendingConnectionController>(PendingConnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
