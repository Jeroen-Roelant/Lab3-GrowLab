import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblstartup')
export class Startup {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36 })
  idOwner: string;

  @Column({ type: 'text', comment: 'Member IDs stored as CSV' })
  idMember: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', comment: 'post IDs stored as CSV' })
  postId: string;
}

/*
{
  "UUID": "",
  "idOwner": "",
  "idMember": "",
  "title": "",
  "description": "",
  "postId": ""
}
*/