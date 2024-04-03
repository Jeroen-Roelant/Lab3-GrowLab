import { Test, TestingModule } from '@nestjs/testing';
import { TestProductController } from './test-product.controller';
import { TestProductService } from './test-product.service';

describe('TestProductController', () => {
  let controller: TestProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestProductController],
      providers: [TestProductService],
    }).compile();

    controller = module.get<TestProductController>(TestProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
