import { Injectable } from '@nestjs/common';
import { CreateCoachClassDto } from './dto/create-coach-class.dto';
import { UpdateCoachClassDto } from './dto/update-coach-class.dto';

@Injectable()
export class CoachClassService {
  create(createCoachClassDto: CreateCoachClassDto) {
    return 'This action adds a new coachClass';
  }

  findAll() {
    return `This action returns all coachClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coachClass`;
  }

  update(id: number, updateCoachClassDto: UpdateCoachClassDto) {
    return `This action updates a #${id} coachClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} coachClass`;
  }
}
