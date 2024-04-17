import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblauth')
export class Auth {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'binary', length: 32, comment: 'password stored as hash in SHA256' })
  passHash: Buffer;
}

/*
{
  "UUID": "",
  "passHash": ""
}
*/