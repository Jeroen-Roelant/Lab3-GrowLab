import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { get } from 'http';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createChatDto: CreateChatDto) {
    try{
      return this.chatService.create(createChatDto);
    }
    catch(error){
      return error;
    }
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get('findChat/:user1/:user2')
  async findChat(@Param('user1') user1: string, @Param('user2') user2: string) {
    try{
      let chat = await this.chatService.findChat(user1, user2);

      if (!chat){
        let createChatDto = new CreateChatDto();
        createChatDto.user1 = user1;
        createChatDto.user2 = user2;
        createChatDto.messages = [""];
        return this.chatService.create(createChatDto);
      }

      return chat;
    }
    catch(error){
      return error;
    }
  }

  @Post('addMessage/:UUID')
  @UseGuards(AuthGuard)
  async addMessage(@Param('UUID') UUID: string, @Body() createMessageDto: CreateMessageDto) {
    try{
      return this.chatService.addMessage(UUID, createMessageDto);
    }
    catch(error){
      return error;
    }
  }

  @Get(':UUID')
  findOne(@Param('UUID') UUID: string) {
    try{
      let chat = this.chatService.findOne(UUID);
      if (!chat){
        return "Chat not found";
      }
      return chat;

    }
    catch(error){
      return error;
    }
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
