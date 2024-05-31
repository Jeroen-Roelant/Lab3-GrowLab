import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,

  ) {}

  // Hier zouden we een teams meeting aanmaken, maar dat is moeilijk wegens de beschermde MS Api die enkel geregistreerde bedrijven toe laat
  // Dus we zullen een random url genereren
    createMeeting = async () => {
      try {
        // fetch(`https://graph.microsoft.com/v1.0/me/onlineMeetings`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + 'MStoken'
        //     },
        //     body: JSON.stringify(
        //       {
        //         "startDateTime":"meetingTime",
        //         "endDateTime":"meetingEndTime",
        //         "subject":"meetingTitle",
        //       }
        //     )
        //   })
        //   .then(response => response.json())
  
        //   if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response.status}`);
        //   }

        //   const posts = await response.json();
        return 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MjQwMzQwZjktZjQwZi00ZjQwLWJjZjQtZjQwZjQwZjQwZjQw%40thread.v2/0?context=%7b%22Tid%22%3a%22f1b9b3f1-3b7d-4b3b-8b3b-3b7d4b3b7d4b%22%2c%22Oid%22%3a%22b3b7d4b3-7d4b-3b7d-4b3b-7d4b3b7d4b3b%22%7d';
      } catch (error) {
          throw new Error(`Could not create meeting`);
      }
  };

  async create(createSessionDto: CreateSessionDto) {
    const session = new Session();
    Object.assign(session, createSessionDto);
    session.UUID = uuidv4();
    session.urlSession = await this.createMeeting();

    if (session.urlSession === undefined) {
      return {
        "UUID": "",
        "title": "FAIL",
        "description": "",
        "date": "",
        "urlSession": "",
        "completed": 0
      };
    }
    return this.sessionRepository.save(session);
  }

  findAll() {
    return this.sessionRepository.find();
  }

  findOne(UUID: string) {
    return this.sessionRepository.findOneBy({ UUID });
  }

  update(UUID: string, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.update(UUID, updateSessionDto);
  }

  remove(UUID: string) {
    
  }
}
