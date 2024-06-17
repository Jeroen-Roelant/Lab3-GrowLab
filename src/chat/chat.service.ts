import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';
import { MessageService } from 'src/message/message.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
    private messageService: MessageService

  ) {}

  create(createChatDto: CreateChatDto) {
    try{
      const chat = new Chat();
      Object.assign(chat, createChatDto);
      chat.UUID = uuidv4();
      return this.chatRepository.save(chat);

    }
    catch(error){
      return error;
    }
  }

  async addMessage(UUID: string, createMessageDto: any) {
    try{
      let chat = await this.chatRepository.findOneBy({UUID: UUID});

      if (!chat){
        return "Chat not found";
      }

      let msg = await this.messageService.create(createMessageDto);
      chat.messages += msg.UUID + ',';

      return this.chatRepository.save(chat);
    }
    catch(error){
      return error;
    }
  }

  async findChat(user1: string, user2: string) {
    let chat: LooseObject = await this.chatRepository.findOne({
      where: [
      { user1: user1, user2: user2 },
      { user1: user2, user2: user1 }
      ]
    });

    if (!chat) {
      return null;
    }

    let chatMsgsId = chat.messages.split(',');
    
    let chatMsgs = [];

    for (let i = 0; i < chatMsgsId.length-1; i++) {
      let msg = await this.messageService.findOne(chatMsgsId[i]);
      chatMsgs.push(msg);
    }

    chat.messages = chatMsgs;
    return chat;
  }

  findAll() {
    return this.chatRepository.find();
  }

  findOne(UUID: string) {
    return this.chatRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateChatDto: UpdateChatDto) {
  }

  remove(UUID: string) {
    
  }
}

function uuidv4(): string {
  throw new Error('Function not implemented.');
}
