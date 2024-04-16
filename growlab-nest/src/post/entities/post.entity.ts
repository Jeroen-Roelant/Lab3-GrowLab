import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblpost')
export class Post {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36, comment: 'id of poster' })
  poster: string;

  @Column({ type: 'enum', enum: ['public', 'private', 'group', 'network', 'system'] })
  visibility: string;

  @Column({ type: 'tinytext' })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'enum', enum: ['text', 'image', 'video'] })
  type: string;

  @Column({ type: 'text', comment: 'comment IDs saved as CSV' })
  comments: string;

  @Column({ type: 'text', comment: 'liked users IDs saved as CSV' })
  likes: string;
}

/*
{
  "UUID": "",
  "poster": "",
  "visibility": "public",
  "title": "",
  "content": "",
  "type": "text",
  "comments": "",
  "likes": ""
}
*/