import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    try{
      return this.sessionService.create(createSessionDto);
    }
    catch (error) {
      return error;
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.sessionService.findOne(UUID);
  }

  @UseGuards(AuthGuard)
  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(UUID, updateSessionDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.sessionService.remove(UUID);
  }
}
