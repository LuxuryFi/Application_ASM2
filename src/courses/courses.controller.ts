import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Course } from 'src/database/entities/course.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService){}

    @Render('courses/index.hbs')
    @Get('index')
    async getAll(): Promise<Course[]>{
        return await this.courseService.findAll();
    }


    @Render('courses/create.hbs')
    @Get('create')
    create() {

    }

    @Post('createOne')
    createOne(@Body() createCourse : CreateCourseDto, @Res() res){
        this.courseService.createOne(createCourse);
        res.status(302).redirect('/courses/index')
    }

    

}
