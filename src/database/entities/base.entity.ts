import {Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
