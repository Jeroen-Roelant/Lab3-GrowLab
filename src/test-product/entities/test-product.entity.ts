import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbltestproduct')
export class TestProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
}
