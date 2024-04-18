import { Module } from '@nestjs/common';
import { PendingConnectionService } from './pending-connection.service';
import { PendingConnectionController } from './pending-connection.controller';
import { PendingConnection } from './entities/pending-connection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PendingConnection])],
  controllers: [PendingConnectionController],
  providers: [PendingConnectionService],
})
export class PendingConnectionModule {}
