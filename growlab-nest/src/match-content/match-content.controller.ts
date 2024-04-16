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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchContentDto: UpdateMatchContentDto) {
    return this.matchContentService.update(+id, updateMatchContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchContentService.remove(+id);
  }
}
