import { Module } from '@nestjs/common';
import { ExperienceEntryService } from './experience-entry.service';
import { ExperienceEntryController } from './experience-entry.controller';

@Module({
  controllers: [ExperienceEntryController],
  providers: [ExperienceEntryService],
})
export class ExperienceEntryModule {}
