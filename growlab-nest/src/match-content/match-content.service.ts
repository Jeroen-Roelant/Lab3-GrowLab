import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMatchContentDto } from './dto/create-match-content.dto';
import { UpdateMatchContentDto } from './dto/update-match-content.dto';
import { MatchContent } from './entities/match-content.entity';

@Injectable()
export class MatchContentService {
  constructor(
    @InjectRepository(MatchContent)
    private matchContentRepository: Repository<MatchContent>,
  ) {}

  create(createMatchContentDto: CreateMatchContentDto) {
    this.matchContentRepository.save(createMatchContentDto);
  }

  findAll() {
    return this.matchContentRepository.find();
  }

  findOne(UUID: string) {
    return this.matchContentRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateMatchContentDto: UpdateMatchContentDto) {
    return this.matchContentRepository.update(UUID, updateMatchContentDto);
  }

  remove(UUID: string) {
    
  }
}