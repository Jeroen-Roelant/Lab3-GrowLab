import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceEntryService } from './experience-entry.service';
import { CreateExperienceEntryDto } from './dto/create-experience-entry.dto';
import { UpdateExperienceEntryDto } from './dto/update-experience-entry.dto';

@Controller('experience-entry')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceEntryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienceEntryDto: UpdateExperienceEntryDto) {
    return this.experienceEntryService.update(+id, updateExperienceEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceEntryService.remove(+id);
  }
}
