import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePendingConnectionDto } from './dto/create-pending-connection.dto';
import { UpdatePendingConnectionDto } from './dto/update-pending-connection.dto';
import { PendingConnection } from './entities/pending-connection.entity';

@Injectable()
export class PendingConnectionService {
  constructor(
    @InjectRepository(PendingConnection)
    private pendingConnectionRepository: Repository<PendingConnection>,
  ) {}

  create(createPendingConnectionDto: CreatePendingConnectionDto) {
    this.pendingConnectionRepository.save(createPendingConnectionDto);
  }

  findAll() {
    return this.pendingConnectionRepository.find();
  }

  findOne(UUID: string) {
    return this.pendingConnectionRepository.findOneBy({ UUID });
  }

  update(UUID: string, updatePendingConnectionDto: UpdatePendingConnectionDto) {
    return this.pendingConnectionRepository.update(UUID, updatePendingConnectionDto);
  }

  remove(UUID: string) {
    
  }
}