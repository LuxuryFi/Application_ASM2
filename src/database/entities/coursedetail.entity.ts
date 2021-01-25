import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn} from 'typeorm'
import { Category } from './category.entity'
import { Course } from './course.entity'
import { Topic } from './topic.entity'
import { Trainer } from './trainer.entity'

@Entity()
export class CourseDetail {
   @ManyToOne(type => Course, {primary:true})
   @JoinColumn({name: "course_id"})
   course_id: Course

   @ManyToOne(type => Category, {primary:true})
   @JoinColumn({name: "category_id"})
   category_id: Category

   @ManyToOne(type => Topic, {primary:true})
   @JoinColumn({name: "topic_id"})
   topic_id: Topic

   @ManyToOne(type => Trainer, {primary:true})
   @JoinColumn({name: "trainer_id"})
   trainer_id: Trainer

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

}
