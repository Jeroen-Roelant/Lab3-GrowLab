import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblcoachclass')
export class CoachClass {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36 })
  idOwner: string;

  @Column({ type: 'text', comment: 'member ids stored as CSV' })
  idMember: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'tinyint', width: 4 })
  totalCheckpoints: number;

  @Column({ type: 'tinytext' })
  currentCheckpoint: string;

  @Column({ type: 'text', comment: 'Post IDs stored as CSV' })
  postId: string;

  @Column({ type: 'text', comment: 'Session IDs stored as CSV' })
  sessionId: string;

  @Column({ type: 'date' })
  nextSession: string;
}

/*
{
  "UUID": "",
  "idOwner": "",
  "idMember": "",
  "title": "",
  "description": "",
  "totalCheckpoints": 0,
  "currentCheckpoint": "",
  "postId": "",
  "sessionId": ""
}
*/