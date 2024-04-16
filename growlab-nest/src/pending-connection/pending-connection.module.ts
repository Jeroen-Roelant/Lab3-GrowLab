import { Module } from '@nestjs/common';
import { PendingConnectionService } from './pending-connection.service';
import { PendingConnectionController } from './pending-connection.controller';

@Module({
  controllers: [PendingConnectionController],
  providers: [PendingConnectionService],
})
export class PendingConnectionModule {}
