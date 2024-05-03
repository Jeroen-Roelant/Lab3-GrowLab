import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(UUID: string) {
    return this.userRepository.findOneBy({ UUID });
  }

  async findOneByEmail(emailstr: string) {
    return await this.userRepository.findOne({
      where:{
        email: emailstr
      }
    });
  }

  update(UUID: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(UUID, updateUserDto);
  }

  remove(UUID: string) {
    
  }
}
