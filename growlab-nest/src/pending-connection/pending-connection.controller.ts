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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendingConnectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePendingConnectionDto: UpdatePendingConnectionDto) {
    return this.pendingConnectionService.update(+id, updatePendingConnectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendingConnectionService.remove(+id);
  }
}
