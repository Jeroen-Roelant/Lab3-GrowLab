import { Entity, Column, PrimaryColumn } from 'typeorm';

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

  @Column({ type: 'enum', enum: ['starter', 'coach', 'admin', 'moderator'] })
  role: string;

  @Column({ type: 'text', comment: 'Coach connections stored as CSV' })
  connectionsCoaches: string;

  @Column({ type: 'text', comment: 'Starter connections stored as CSV' })
  connectionsStarters: string;

  @Column({ type: 'tinyint', width: 1, comment: 'Bool that decides if user gets pro perks (temp option)' })
  isProUser: number;

  @Column({ type: 'text', comment: 'Badge IDs stored as CSV' })
  badgeId: string;

  @Column({ type: 'date' })
  dateJoined: Date;

  @Column({ type: 'varchar', length: 100 })
  profilePictureUrl: string;

  @Column({ type: 'varchar', length: 100 })
  bannerPictureUrl: string;

  @Column({ type: 'text', comment: 'experience IDs stored as CSV' })
  educationId: string;

  @Column({ type: 'text', comment: 'experience IDs stored as CSV' })
  experienceId: string;
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