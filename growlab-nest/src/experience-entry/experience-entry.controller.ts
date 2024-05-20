import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceEntryService } from './experience-entry.service';
import { CreateExperienceEntryDto } from './dto/create-experience-entry.dto';
import { UpdateExperienceEntryDto } from './dto/update-experience-entry.dto';

@Controller('experience')
export class ExperienceEntryController {
  constructor(private readonly experienceEntryService: ExperienceEntryService) {}

  @Post()
  create(@Body() createExperienceEntryDto: CreateExperienceEntryDto) {
    return this.experienceEntryService.create(createExperienceEntryDto);
  }

  @Get()
  findAll() {
    return this.experienceEntryService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.experienceEntryService.findOne(UUID);
  }

  //find all by UUID
  @Get('/findall/:UUID')
  findAllByUUID(@Param('UUID') UUID: string) {
    return this.experienceEntryService.findAllByUUID(UUID);
  }


  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateExperienceEntryDto: UpdateExperienceEntryDto) {
    return this.experienceEntryService.update(UUID, updateExperienceEntryDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.experienceEntryService.remove(UUID);
  }
}
