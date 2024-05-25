import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestProductService } from './test-product.service';
import { TestProductController } from './test-product.controller';
import { TestProduct } from './entities/test-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestProduct])],
  controllers: [TestProductController],
  providers: [TestProductService],
})
export class TestProductModule {}
