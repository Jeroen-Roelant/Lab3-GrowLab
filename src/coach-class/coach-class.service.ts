import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { CreateCoachClassDto } from './dto/create-coach-class.dto';
import { UpdateCoachClassDto } from './dto/update-coach-class.dto';
import { CoachClass } from './entities/coach-class.entity';
import { SessionService } from 'src/session/session.service';
import { CreateSessionDto } from 'src/session/dto/create-session.dto';
import { Session } from 'src/session/entities/session.entity';
import { PostService } from 'src/post/post.service';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Injectable()
export class CoachClassService {
  constructor(
    @InjectRepository(CoachClass)
    private coachClassRepository: Repository<CoachClass>,
    private sessionService: SessionService,
    private postService: PostService
  ) {}

  create(createCoachClassDto: CreateCoachClassDto) {
    try{
      const coachClass = new CoachClass();
      Object.assign(coachClass, createCoachClassDto);
      coachClass.UUID = uuidv4();
      this.coachClassRepository.save(coachClass);
      return coachClass;
    }
    catch (error) {
      return error;
    }
  }

  async addPost(UUID: string, createPostDto: CreatePostDto) {
    const coachClass: LooseObject = await this.coachClassRepository.findOneBy({ UUID });

    let post = await this.postService.create(createPostDto);
    coachClass.postId = coachClass.postId + post.UUID + ',';

    return this.coachClassRepository.update(UUID, coachClass);
  }

  async addSession(UUID: string, createSessionDto: CreateSessionDto) {
    const coachClass: LooseObject = await this.coachClassRepository.findOneBy({ UUID });

    let s = await this.sessionService.create(createSessionDto);

    if (s.UUID === '') {
      return 'failed to create meeting';
    }
    coachClass.sessionId = coachClass.sessionId + s.UUID + ',';

    return this.coachClassRepository.update(UUID, coachClass);
  }

  findAll() {
    return this.coachClassRepository.find();
  }

  async findAllByMember(UUID: string) {
    try{
      let r = await this.coachClassRepository.find({
        where: {
          idMember: Like(`%${UUID}%`)
        }
      });

      if (r.length === 0) {
        throw 'no classes found';
      }
      return r;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  async findAllByOwner(UUID: string) {
    try{
      let r = await this.coachClassRepository.find({
        where: {
          idOwner: Like(`%${UUID}%`)
        }
      });

      if (r.length === 0) {
        throw 'no classes found';
      }
      return r;
    }
    catch (error) {
      throw new Error(error);
    }
  }

  async findOne(UUID: string) {
    try{
      const resClass: LooseObject = await this.coachClassRepository.findOneBy({ UUID });

      const sIds = resClass.sessionId.split(',');
      sIds.pop();

      const pIds = resClass.postId.split(',');
      pIds.pop();

      const sessions = await Promise.all(
        sIds.map(async sUUID => {
          let session: LooseObject = await this.sessionService.findOne(sUUID);
          return session;
        })
      );
      resClass.sessions = sessions;
      resClass.sessions.sort((a, b) => b.date.getTime() - a.date.getTime());

      const posts = await Promise.all(
        pIds.map(async pUUID => {
          let post: LooseObject = await this.postService.findOne(pUUID);
          return post;
        })
      );
      resClass.posts = posts;
      
      return resClass;
    }
    catch (error) {
      return error;
    }
  }

  update(UUID: string, updateCoachClassDto: UpdateCoachClassDto) {
    try{
      return this.coachClassRepository.update(UUID, updateCoachClassDto);
    }
    catch (error) {
      return error;
    }
  }

  remove(UUID: string) {
    
  }
}