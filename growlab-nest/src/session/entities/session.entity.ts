import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tblsession')
export class Session {
    @PrimaryColumn({ type: 'varchar', length: 36 })
    UUID: string;
    
    @Column({ type: 'varchar', length: 100 })
    title: string;
    
    @Column({ type: 'text' })
    description: string;
    
    @Column({ type: 'datetime' })
    date: Date;

    @Column({ type: 'varchar', length: 150 })
    urlSession: string;

    @Column({ type: 'tinyint', width: 1})
    completed: boolean;
}