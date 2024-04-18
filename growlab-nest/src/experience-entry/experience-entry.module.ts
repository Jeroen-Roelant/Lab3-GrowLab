import { Module } from '@nestjs/common';
import { ExperienceEntryService } from './experience-entry.service';
import { ExperienceEntryController } from './experience-entry.controller';
import { ExperienceEntry } from './entities/experience-entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExperienceEntry])],
  controllers: [ExperienceEntryController],
  providers: [ExperienceEntryService],
})
export class ExperienceEntryModule {}
