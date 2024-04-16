import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblexperienceentry')
export class ExperienceEntry {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'tinytext' })
  title: string;

  @Column({ type: 'text', comment: 'url or blob base64 TEMP' })
  icon: string;

  @Column({ type: 'int', width: 11 })
  description: number;

  @Column({ type: 'enum', enum: ['education', 'work', 'other'] })
  type: string;
}