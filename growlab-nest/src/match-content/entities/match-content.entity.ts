import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblmatchcontent')
export class MatchContent {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'text', comment: 'interest IDs saved as CSV' })
  interests: string;

  @Column({ type: 'text', comment: 'talent IDs saved as CSV' })
  talents: string;

  @Column({ type: 'text', comment: 'textfield with short description' })
  lookingFor: string;
}

/*
{
  "UUID": "",
  "interests": "",
  "talents": "",
  "lookingFor": ""
}
*/