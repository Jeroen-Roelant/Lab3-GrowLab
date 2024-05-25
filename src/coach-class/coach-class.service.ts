import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateCoachClassDto } from './dto/create-coach-class.dto';
import { UpdateCoachClassDto } from './dto/update-coach-class.dto';
import { CoachClass } from './entities/coach-class.entity';
import { SessionService } from 'src/session/session.service';
import { CreateSessionDto } from 'src/session/dto/create-session.dto';
import { Session } from 'src/session/entities/session.entity';

@Injectable()
export class CoachClassService {
  constructor(
    @InjectRepository(CoachClass)
    private coachClassRepository: Repository<CoachClass>,
    private sessionService: SessionService
  ) {}

  create(createCoachClassDto: CreateCoachClassDto) {
    return this.coachClassRepository.save(createCoachClassDto);
  }

  async addSession(UUID: string, createSessionDto: CreateSessionDto) {
    const coachClass: LooseObject = await this.coachClassRepository.findOneBy({ UUID });

    let s = await this.sessionService.create(createSessionDto);

    if (s.UUID === '') {
      return 'failed to create meeting';
    }
    coachClass.sessionId = coachClass.sessionId + s.UUID + ',';

    return this.coachClassRepository.update(UUID, coachClass);
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

  async findOne(UUID: string) {
    const resClass: LooseObject = await this.coachClassRepository.findOneBy({ UUID });
    const sIds = resClass.sessionId.split(',');

    const sessions = await Promise.all(
      sIds.map(async sUUID => {
        let session: LooseObject = await this.sessionService.findOne(sUUID);
        return session;
      })
    );

    sessions.pop();
    resClass.sessions = sessions;

    return resClass;
  }

  update(UUID: string, updateCoachClassDto: UpdateCoachClassDto) {
    return this.coachClassRepository.update(UUID, updateCoachClassDto);
  }

  remove(UUID: string) {
    
  }
}