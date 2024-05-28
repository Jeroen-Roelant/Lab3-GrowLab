import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('tblstartup')
export class Startup {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  UUID: string;

  @Column({ type: 'varchar', length: 36 })
  idOwner: string;

  @Column({ type: 'text', comment: 'Member IDs stored as CSV' })
  idMember: string;

  @Column({ type: 'varchar', length: 100, comment: 'Function name'})
  title: string;

  @Column({ type: 'varchar', length: 100, comment: 'StartUp name'})
  institution: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', comment: 'post IDs stored as CSV' })
  postId: string;

  @Column({ type: 'varchar', length: 300, comment: 'Logo URL'}) 
  logoUrl: string;

  @Column({ type: 'varchar', length: 300, comment: 'Logo URL'})
  fotoUrl: string;
}

/*
{
  "UUID": "",
  "idOwner": "",
  "idMember": "",
  "title": "",
  "description": "",
  "postId": ""
}
*/