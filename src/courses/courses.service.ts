import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/database/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
    async createOne(createCourse: CreateCourseDto) {
        let course = this.courseRepository.create(createCourse);    
        await this.courseRepository.save(course);
    }
    constructor(@InjectRepository(Course) private courseRepository : Repository<Course>) {}
    async findAll() : Promise<Course[]> {
        return await this.courseRepository.find();
        
    }

}
