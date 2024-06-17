import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMessageDto: CreateMessageDto) {
    try{
      return this.messageService.create(createMessageDto);

    }
    catch(error){
      return error;
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.messageService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(UUID, updateMessageDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.messageService.remove(UUID);
  }
}
