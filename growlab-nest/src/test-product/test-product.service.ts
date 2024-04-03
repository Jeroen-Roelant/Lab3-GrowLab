import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTestProductDto } from './dto/create-test-product.dto';
import { UpdateTestProductDto } from './dto/update-test-product.dto';
import { TestProduct } from './entities/test-product.entity';

@Injectable()
export class TestProductService {
  constructor(
    @InjectRepository(TestProduct)
    private testProductRepository: Repository<TestProduct>,
  ) {}

  create(createTestProductDto: CreateTestProductDto) {
    this.testProductRepository.save(createTestProductDto);
  }

  findAll() {
    return this.testProductRepository.find();
  }

  findOne(id: number) {
    return this.testProductRepository.findOneBy({ id });
  }

  update(id: number, updateTestProductDto: UpdateTestProductDto) {
    this.testProductRepository.update(id, updateTestProductDto);
  }

  async remove(id: number) {
    await this.testProductRepository.delete(id);
  }
}
