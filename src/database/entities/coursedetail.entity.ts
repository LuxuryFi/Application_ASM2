import { join } from 'path'
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn} from 'typeorm'
import { Category } from './category.entity'
import { Course } from './course.entity'
import { Topic } from './topic.entity'
import { Trainer } from './trainer.entity'

@Entity()
export class CourseDetail {
   @ManyToOne(type => Course, {primary:true})
   @JoinColumn({name: "course_id"})
   course_id: number

   // @Column()
   // category_id : number

   // @Column()
   // course_id: number

   // @Column()
   // topic_id: number

   // @Column()
   // trainer_id :number


   @ManyToOne(type => Category, {primary:true})
   @JoinColumn({name: "category_id"})
   category_id: number

   @ManyToOne(type => Topic, {primary:true})
   @JoinColumn({name: "topic_id"})
   topic_id: number

   @ManyToOne(type => Trainer, {primary:true})
   @JoinColumn({name: "trainer_id"})
   trainer_id: number

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

}
