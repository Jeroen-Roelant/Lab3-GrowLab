import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private userService: UserService,
    private jwtService: JwtService
  ) {
    require("dotenv").config();
  }

  create(createAuthDto: CreateAuthDto) {
    // this.authRepository.save(createAuthDto);
  }

  findAll() {
    // return this.authRepository.find();
  }

  findOne(UUID: string) {
    return this.authRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateAuthDto: UpdateAuthDto) {
    // return this.authRepository.update(UUID, updateAuthDto);
  }

  remove(UUID: string) {
    
  }

  async signIn(
    username: string, 
    pass: string
  ): Promise<{ access_token: string }> {
    try{
      // https://docs.nestjs.com/security/authentication#implementing-the-authentication-guard
      const user = await this.userService.findOneByEmail(username);

      console.log(user);
      if (!user) {
        console.log("User not found");
        throw new UnauthorizedException();
      }
    
      const authUser = await this.findOne(user.UUID);

      if (authUser.passHash !== pass) {
        console.log("Password incorrect");
        throw new UnauthorizedException();
      }

      if (authUser.passHash === pass && user.email === username && user.UUID === authUser.UUID) {
        const payload = { 
          sub: authUser.UUID, 
          username: user.email
        }

        return {
          access_token: await this.jwtService.signAsync(payload),
        }
      }
      throw new UnauthorizedException();
    }
    catch{
      throw new UnauthorizedException();
    }
  }

  async signUp(createAuthDto: CreateAuthDto) {
    const user = await this.userService.create(createAuthDto);
    return this.create(createAuthDto);
  }
}