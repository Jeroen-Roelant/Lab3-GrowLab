import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblbadge')
export class Badge {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 45 })
  title: string;

  @Column({ type: 'text', comment: 'url to icon/ blob base64(temp)' })
  icon: string;

  @Column({ type: 'text' })
  description: string;
}