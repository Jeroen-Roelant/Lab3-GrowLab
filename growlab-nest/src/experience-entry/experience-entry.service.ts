import { Injectable } from '@nestjs/common';
import { CreateExperienceEntryDto } from './dto/create-experience-entry.dto';
import { UpdateExperienceEntryDto } from './dto/update-experience-entry.dto';

@Injectable()
export class ExperienceEntryService {
  create(createExperienceEntryDto: CreateExperienceEntryDto) {
    return 'This action adds a new experienceEntry';
  }

  findAll() {
    return `This action returns all experienceEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experienceEntry`;
  }

  update(id: number, updateExperienceEntryDto: UpdateExperienceEntryDto) {
    return `This action updates a #${id} experienceEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} experienceEntry`;
  }
}
