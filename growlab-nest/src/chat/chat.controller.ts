import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    return this.chatService.findOne(UUID);
  }

  @Patch(':UUID')
  update(@Param('UUID') UUID: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(UUID, updateChatDto);
  }

  @Delete(':UUID')
  remove(@Param('UUID') UUID: string) {
    return this.chatService.remove(UUID);
  }
}
