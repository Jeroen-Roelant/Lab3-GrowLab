import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblcomment')
export class Comment {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36, comment: 'id of poster' })
  poster: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', comment: 'liked users IDs saved as CSV' })
  likedUsers: string;
}

/*
{
  "UUID": "",
  "poster": "",
  "content": "",
  "likedUsers": ""
}
*/