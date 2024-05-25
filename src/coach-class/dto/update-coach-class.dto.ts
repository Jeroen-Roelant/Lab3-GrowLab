import { PartialType } from '@nestjs/mapped-types';
import { CreateCoachClassDto } from './create-coach-class.dto';

export class UpdateCoachClassDto extends PartialType(CreateCoachClassDto) {}
