import { Module } from '@nestjs/common';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';

@Module({
  controllers: [StartupController],
  providers: [StartupService],
})
export class StartupModule {}
