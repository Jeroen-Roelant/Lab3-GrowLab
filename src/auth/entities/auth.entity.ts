import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblauth')
export class Auth {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 64, comment: 'password stored as hash in SHA256' })
  passHash: string;
}

/*
{
  "UUID": "",
  "passHash": ""
}
*/