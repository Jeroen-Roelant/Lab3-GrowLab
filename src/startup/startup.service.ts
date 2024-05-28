import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './entities/startup.entity';

@Injectable()
export class StartupService {
  constructor(
    @InjectRepository(Startup)
    private startupRepository: Repository<Startup>,
  ) {}

  create(createStartupDto: CreateStartupDto) {
    this.startupRepository.save(createStartupDto);
  }

  findAll() {
    return this.startupRepository.find();
  }

  findOne(UUID: string) {
    return this.startupRepository.findOneBy({ UUID });
  }

  //find all by OwnerId (is UUID van de user)
  findAllByidOwner(idOwner: string) {
    return this.startupRepository.find({ where: { idOwner } });
  }

  update(UUID: string, updateStartupDto: UpdateStartupDto) {
    return this.startupRepository.update(UUID, updateStartupDto);
  }

  remove(UUID: string) {
    
  }
}