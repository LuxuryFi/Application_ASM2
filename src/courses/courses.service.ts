import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/database/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {    
    constructor(@InjectRepository(Course) private courseRepository : Repository<Course>) {}

    async createOne(createCourse: CreateCourseDto) {
        let course = this.courseRepository.create(createCourse);    
        await this.courseRepository.save(course);
    }

    async findOne(id : number){
        let course = await this.courseRepository.findOne(id);
        return course;
    }

    async findAll() : Promise<Course[]> {
        return await this.courseRepository.find();
        
    }
    
    async updateOne(updateCourse : UpdateCourseDto) {
        this.courseRepository.update({id: updateCourse.id}, {course_name : updateCourse.course_name, 
            course_description: updateCourse.course_description, is_active: updateCourse.is_active})
    }

    deleteOne(id:number){
        this.courseRepository.delete(id);
    }


}
