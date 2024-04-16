import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoachClassService } from './coach-class.service';
import { CreateCoachClassDto } from './dto/create-coach-class.dto';
import { UpdateCoachClassDto } from './dto/update-coach-class.dto';

@Controller('coach-class')
export class CoachClassController {
  constructor(private readonly coachClassService: CoachClassService) {}

  @Post()
  create(@Body() createCoachClassDto: CreateCoachClassDto) {
    return this.coachClassService.create(createCoachClassDto);
  }

  @Get()
  findAll() {
    return this.coachClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coachClassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoachClassDto: UpdateCoachClassDto) {
    return this.coachClassService.update(+id, updateCoachClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coachClassService.remove(+id);
  }
}
