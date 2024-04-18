import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { Badge } from './entities/badge.entity';

@Injectable()
export class BadgeService {
  constructor(
    @InjectRepository(Badge)
    private badgeRepository: Repository<Badge>,
  ) {}

  create(createBadgeDto: CreateBadgeDto) {
    this.badgeRepository.save(createBadgeDto);
  }

  findAll() {
    return this.badgeRepository.find();
  }

  findOne(UUID: string) {
    return this.badgeRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateBadgeDto: UpdateBadgeDto) {
    return this.badgeRepository.update(UUID, updateBadgeDto);
  }

  remove(UUID: string) {
    
  }
}