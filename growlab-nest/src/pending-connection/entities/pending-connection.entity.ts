import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tblpendingconnection')
export class PendingConnection {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36 })
  idSender: string;

  @Column({ type: 'varchar', length: 36 })
  idTarget: string;

  @Column({ type: 'enum', enum: ['sent', 'accepted', 'denied'] })
  state: string;
}

/*
{
  "UUID": "",
  "idSender": "",
  "idTarget": "",
  "state": "sent"
}
*/