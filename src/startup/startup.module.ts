import { Module } from '@nestjs/common';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';
import { Startup } from './entities/startup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Startup])],
  controllers: [StartupController],
  providers: [StartupService],
})
export class StartupModule {}
