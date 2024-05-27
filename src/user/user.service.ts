import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(UUID: string) {
    try{    
      let u = await this.userRepository.findOneBy({ UUID });
      if (!u) {
        throw new NotFoundException(`User with UUID ${UUID} not found`);
      }
      return u;
    }
    catch (error) {
      return error;
    }
  }

  async findOneByEmail(emailstr: string) {
    try{
        let u = await this.userRepository.findOne({
        where:{
          email: emailstr
        } 
      })

      if (!u) {
        throw new NotFoundException(`User with email ${emailstr} not found`);
      }
      return u;
    }
    catch (error) {
      return error;
    }
  }

  async update(UUID: string, updateUserDto: UpdateUserDto) {
    try{
      let u = await this.userRepository.update(UUID, updateUserDto);
      if (!u) {
        throw new NotFoundException(`User with UUID ${UUID} not found`);
      }
      return u;
    }
    catch (error) {
      return error;
    }
  }

  remove(UUID: string) {
    
  }
}
