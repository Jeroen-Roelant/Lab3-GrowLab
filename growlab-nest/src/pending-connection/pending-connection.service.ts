import { Injectable } from '@nestjs/common';
import { CreatePendingConnectionDto } from './dto/create-pending-connection.dto';
import { UpdatePendingConnectionDto } from './dto/update-pending-connection.dto';

@Injectable()
export class PendingConnectionService {
  create(createPendingConnectionDto: CreatePendingConnectionDto) {
    return 'This action adds a new pendingConnection';
  }

  findAll() {
    return `This action returns all pendingConnection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendingConnection`;
  }

  update(id: number, updatePendingConnectionDto: UpdatePendingConnectionDto) {
    return `This action updates a #${id} pendingConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendingConnection`;
  }
}
