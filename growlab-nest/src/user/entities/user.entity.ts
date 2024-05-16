import { Entity, Column, PrimaryColumn } from 'typeorm';

export enum UserRole {
  ADMIN = "admin",
  STARTER = "starter",
  COACH = "coach",
  MODERATOR = "moderator",
  GHOST = "ghost"
}

@Entity('tbluser')
export class User {
  @PrimaryColumn({ type: 'varchar', length: 36, comment: 'primary key UUID' })
  UUID: string;

  @Column({ type: 'varchar', length: 45 })
  firstName: string;

  @Column({ type: 'varchar', length: 45 })
  lastName: string;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.GHOST})
  role: string;

  @Column({ type: 'text', comment: 'Coach connections stored as CSV', nullable: true })
  connectionsCoaches: string;

  @Column({ type: 'text', comment: 'Starter connections stored as CSV', nullable: true})
  connectionsStarters: string;

  @Column({ type: 'tinyint', width: 1, comment: 'Bool that decides if user gets pro perks (temp option)' })
  isProUser: number;

  @Column({ type: 'text', comment: 'Badge IDs stored as CSV', nullable: true })
  badgeId: string;

  @Column({ type: 'date' })
  dateJoined: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  profilePictureUrl: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bannerPictureUrl: string;

  @Column({ type: 'text', comment: 'experience IDs stored as CSV', nullable: true })
  educationId: string;

  @Column({ type: 'text', comment: 'experience IDs stored as CSV', nullable: true })
  experienceId: string;

  @Column({ type: 'varchar', length: 600, nullable: true})
  about: string;

  @Column({ type: 'text', comment: 'Talents connections stored as CSV', nullable: true})
  talenten: string;

  @Column({ type: 'text', comment: 'Interesses connections stored as CSV', nullable: true})
  interesses: string;
}

/*
{
  "UUID": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "role": "starter",
  "connectionsCoaches": "",
  "connectionsStarters": "",
  "isProUser": 0,
  "badgeId": "",
  "dateJoined": "2024-01-01",
  "profilePictureUrl": "",
  "bannerPictureUrl": "",
  "educationId": "",
  "experienceId": ""
}
*/