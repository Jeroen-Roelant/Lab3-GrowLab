import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    try {
      const message = new Message();
      Object.assign(message, createMessageDto);
      message.UUID = uuidv4();
      return this.messageRepository.save(message);
    } catch (error) {
      console.error('Error while saving message:', error);
      throw error;
    }
  }

  findAll() {
    return this.messageRepository.find();
  }

  findOne(UUID: string) {
    return this.messageRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.update(UUID, updateMessageDto);
  }

  remove(UUID: string) {
    
  }
}