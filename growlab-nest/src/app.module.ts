import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { TestProductModule } from './test-product/test-product.module';
import { TestProduct } from './test-product/entities/test-product.entity';
import { BadgeModule } from './badge/badge.module';
import { ChatModule } from './chat/chat.module';
import { CoachClassModule } from './coach-class/coach-class.module';
import { CommentModule } from './comment/comment.module';
import { ExperienceEntryModule } from './experience-entry/experience-entry.module';
import { MatchContentModule } from './match-content/match-content.module';
import { MessageModule } from './message/message.module';
import { PendingConnectionModule } from './pending-connection/pending-connection.module';
import { PostModule } from './post/post.module';
import { StartupModule } from './startup/startup.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@nestjs/core';
import { SessionModule } from './session/session.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306 ,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TestProductModule,
    BadgeModule,
    ChatModule,
    CoachClassModule,
    CommentModule,
    ExperienceEntryModule,
    MatchContentModule,
    MessageModule,
    PendingConnectionModule,
    PostModule,
    StartupModule,
    UserModule,
    AuthModule,
    SessionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
