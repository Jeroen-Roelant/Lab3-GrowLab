import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';

@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @Post()
  create(@Body() createStartupDto: CreateStartupDto) {
    return this.startupService.create(createStartupDto);
  }

  @Get()
  findAll() {
    return this.startupService.findAll();
  }

  //find all by OwnerId (is UUID van de user)
  @Get('/findall/:idOwner')
  findAllByUUID(@Param('idOwner') idOwner: string) {
    return this.startupService.findAllByidOwner(idOwner);
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.startupService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateStartupDto: UpdateStartupDto) {
    return this.startupService.update(UUID, updateStartupDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.startupService.remove(UUID);
  }
}
