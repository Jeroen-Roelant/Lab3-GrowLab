import { PartialType } from '@nestjs/mapped-types';
import { CreatePendingConnectionDto } from './create-pending-connection.dto';

export class UpdatePendingConnectionDto extends PartialType(CreatePendingConnectionDto) {}
