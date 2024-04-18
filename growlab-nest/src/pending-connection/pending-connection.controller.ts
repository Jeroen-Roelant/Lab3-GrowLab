import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendingConnectionService } from './pending-connection.service';
import { CreatePendingConnectionDto } from './dto/create-pending-connection.dto';
import { UpdatePendingConnectionDto } from './dto/update-pending-connection.dto';

@Controller('pending-connection')
export class PendingConnectionController {
  constructor(private readonly pendingConnectionService: PendingConnectionService) {}

  @Post()
  create(@Body() createPendingConnectionDto: CreatePendingConnectionDto) {
    return this.pendingConnectionService.create(createPendingConnectionDto);
  }

  @Get()
  findAll() {
    return this.pendingConnectionService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.pendingConnectionService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updatePendingConnectionDto: UpdatePendingConnectionDto) {
    return this.pendingConnectionService.update(UUID, updatePendingConnectionDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.pendingConnectionService.remove(UUID);
  }
}
