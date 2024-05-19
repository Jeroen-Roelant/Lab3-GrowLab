import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,

  ) {}

  create(createSessionDto: CreateSessionDto) {
    const session = new Session();
    Object.assign(session, createSessionDto);
    session.UUID = uuidv4();
    this.sessionRepository.save(session);
  }

  findAll() {
    return this.sessionRepository.find();
  }

  findOne(UUID: string) {
    return this.sessionRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.update(UUID, updateSessionDto);
  }

  remove(UUID: string) {
    
  }
}
