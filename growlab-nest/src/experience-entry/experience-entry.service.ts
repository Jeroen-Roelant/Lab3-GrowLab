import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateExperienceEntryDto } from './dto/create-experience-entry.dto';
import { UpdateExperienceEntryDto } from './dto/update-experience-entry.dto';
import { ExperienceEntry } from './entities/experience-entry.entity';

@Injectable()
export class ExperienceEntryService {
  constructor(
    @InjectRepository(ExperienceEntry)
    private experienceEntryRepository: Repository<ExperienceEntry>,
  ) {}

  create(createExperienceEntryDto: CreateExperienceEntryDto) {
    this.experienceEntryRepository.save(createExperienceEntryDto);
  }

  findAll() {
    return this.experienceEntryRepository.find();
  }

  findOne(UUID: string) {
    return this.experienceEntryRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateExperienceEntryDto: UpdateExperienceEntryDto) {
    return this.experienceEntryRepository.update(UUID, updateExperienceEntryDto);
  }

  remove(UUID: string) {
    
  }
}