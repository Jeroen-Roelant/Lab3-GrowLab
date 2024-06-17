import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblmessage')
export class Message {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36, comment: 'ID of chat message belongs to' })
  chat: string;

  @Column({ type: 'varchar', length: 36, comment: 'id of sender' })
  sender: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'enum', enum: ['text', 'image'] })
  type: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

/*
{
  "UUID": "",
  "chat": "",
  "sender": "",
  "content": "",
  "type": "text"
}
*/