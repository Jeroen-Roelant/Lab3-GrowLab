import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { CreateCoachClassDto } from './dto/create-coach-class.dto';
import { UpdateCoachClassDto } from './dto/update-coach-class.dto';
import { CoachClass } from './entities/coach-class.entity';

@Injectable()
export class CoachClassService {
  constructor(
    @InjectRepository(CoachClass)
    private coachClassRepository: Repository<CoachClass>,
  ) {}

  create(createCoachClassDto: CreateCoachClassDto) {
    this.coachClassRepository.save(createCoachClassDto);
  }

  findAll() {
    return this.coachClassRepository.find();
  }

  async findAllByMember(UUID: string) {
    return await this.coachClassRepository.find({
      where: {
        idMember: Like(`%${UUID}%`)
      }
    });
  }

  findOne(UUID: string) {
    return this.coachClassRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateCoachClassDto: UpdateCoachClassDto) {
    return this.coachClassRepository.update(UUID, updateCoachClassDto);
  }

  remove(UUID: string) {
    
  }
}