import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchContentService } from './match-content.service';
import { CreateMatchContentDto } from './dto/create-match-content.dto';
import { UpdateMatchContentDto } from './dto/update-match-content.dto';

@Controller('match-content')
export class MatchContentController {
  constructor(private readonly matchContentService: MatchContentService) {}

  @Post()
  create(@Body() createMatchContentDto: CreateMatchContentDto) {
    return this.matchContentService.create(createMatchContentDto);
  }

  @Get()
  findAll() {
    return this.matchContentService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.matchContentService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateMatchContentDto: UpdateMatchContentDto) {
    return this.matchContentService.update(UUID, updateMatchContentDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.matchContentService.remove(UUID);
  }
}
