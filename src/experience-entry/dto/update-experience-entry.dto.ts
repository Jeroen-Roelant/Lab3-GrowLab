import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienceEntryDto } from './create-experience-entry.dto';

export class UpdateExperienceEntryDto extends PartialType(CreateExperienceEntryDto) {}
