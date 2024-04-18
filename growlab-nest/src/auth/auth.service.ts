import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    this.authRepository.save(createAuthDto);
  }

  findAll() {
    return this.authRepository.find();
  }

  findOne(UUID: string) {
    return this.authRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.update(UUID, updateAuthDto);
  }

  remove(UUID: string) {
    
  }
}