import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchContentDto } from './create-match-content.dto';

export class UpdateMatchContentDto extends PartialType(CreateMatchContentDto) {}
