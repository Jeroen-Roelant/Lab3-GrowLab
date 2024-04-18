import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  create(createChatDto: CreateChatDto) {
    this.chatRepository.save(createChatDto);
  }

  findAll() {
    return this.chatRepository.find();
  }

  findOne(UUID: string) {
    return this.chatRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateChatDto: UpdateChatDto) {
    return this.chatRepository.update(UUID, updateChatDto);
  }

  remove(UUID: string) {
    
  }
}