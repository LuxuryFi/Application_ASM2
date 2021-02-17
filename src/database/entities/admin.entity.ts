import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Admin extends Base {
    @Column()
    trainer_firstname: string

    @Column()
    trainer_lastname: string

    @Column()
    trainer_email: string

    @Column()
    trainer_phone: string
    
    @Column()
    trainer_address: string

    @Column()
    avatar: string

    @Column()
    password: string

    @Column({default:4})
    role_id: number
}
