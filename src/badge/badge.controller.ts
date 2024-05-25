import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Controller('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Post()
  create(@Body() createBadgeDto: CreateBadgeDto) {
    return this.badgeService.create(createBadgeDto);
  }

  @Get()
  findAll() {
    return this.badgeService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.badgeService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateBadgeDto: UpdateBadgeDto) {
    return this.badgeService.update(UUID, updateBadgeDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.badgeService.remove(UUID);
  }
}
