import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { Base } from './base.entity';

@Entity()
export class Course extends Base {
    @Column()
    course_name: string

    @Column()
    course_description: string
}
