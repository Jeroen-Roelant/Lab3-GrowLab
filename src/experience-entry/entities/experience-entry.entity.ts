import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('tblexperienceentry')
export class ExperienceEntry {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'tinytext' })
  title: string;

  @Column({ type: 'tinytext' })
  institution: string;

  @Column({ type: 'text', comment: 'url or blob base64 TEMP' })
  icon: string;

  @Column({ type: 'varchar', width: 200 })
  description: string;

  @Column({ type: 'enum', enum: ['education', 'work', 'other'] })
  type: string;
}

/*
{
  "UUID": "",
  "title": "",
  "icon": "",
  "description": 0,
  "type": "education"
}
*/