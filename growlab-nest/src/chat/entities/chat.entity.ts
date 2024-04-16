import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblchat')
export class Chat {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36, comment: 'uuid of user' })
  user1: string;

  @Column({ type: 'varchar', length: 36, comment: 'uuid of user' })
  user2: string;

  @Column({ type: 'mediumtext', comment: 'message IDs saved as CSV' })
  messages: string;
}