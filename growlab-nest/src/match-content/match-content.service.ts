import { Injectable } from '@nestjs/common';
import { CreateMatchContentDto } from './dto/create-match-content.dto';
import { UpdateMatchContentDto } from './dto/update-match-content.dto';

@Injectable()
export class MatchContentService {
  create(createMatchContentDto: CreateMatchContentDto) {
    return 'This action adds a new matchContent';
  }

  findAll() {
    return `This action returns all matchContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchContent`;
  }

  update(id: number, updateMatchContentDto: UpdateMatchContentDto) {
    return `This action updates a #${id} matchContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchContent`;
  }
}
