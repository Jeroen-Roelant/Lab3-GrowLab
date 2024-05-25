import { Test, TestingModule } from '@nestjs/testing';
import { PendingConnectionService } from './pending-connection.service';

describe('PendingConnectionService', () => {
  let service: PendingConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendingConnectionService],
    }).compile();

    service = module.get<PendingConnectionService>(PendingConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
