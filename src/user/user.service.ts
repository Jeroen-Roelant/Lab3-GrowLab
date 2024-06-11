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

  //add new UUID to connectionsStarters of user with UUID
  async addStarterConnection(UUID: string, starterUUID: string) {
    console.log("hier")

    try{
      let u = await this.userRepository.findOneBy({UUID});
      if (!u) {
        throw new NotFoundException(`User with UUID ${UUID} not found`);
      }
      u.connectionsStarters = u.connectionsStarters + "," + starterUUID;
      return this.userRepository.save(u);
    }
    catch (error) {
      return error;
    }
  }


  //delete UUID from connectionsStarters of user with UUID
  async deleteStarterConnection(UUID: string, starterUUID: string) {
    try{
      let u = await this.userRepository.findOneBy({UUID});
      if (!u) {
        throw new NotFoundException(`User with UUID ${UUID} not found`);
      }
      u.connectionsStarters = u.connectionsStarters.replace(starterUUID, "");
      return this.userRepository.save(u);
    }
    catch (error) {
      return error;
    }
  }

}
