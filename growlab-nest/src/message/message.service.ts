import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    this.messageRepository.save(createMessageDto);
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