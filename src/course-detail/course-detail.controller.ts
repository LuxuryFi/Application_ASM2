import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { CoursesService } from 'src/courses/courses.service';
import { TopicsService } from 'src/topics/topics.service';
import { TrainersService } from 'src/trainers/trainers.service';
import { CourseDetailService } from './course-detail.service';
import { CreateDetailDto } from './dto/create-coursedetail';

@Controller('course-detail')
export class CourseDetailController {
    constructor(
        private readonly detailService : CourseDetailService,
        private readonly topicService : TopicsService, 
        private readonly trainerService : TrainersService, 
        private readonly  courseService : CoursesService, 
        private readonly categoryService : CategoriesService 
    ){}
    

    @Render('course-detail/index.hbs')
    @Get('index')
    index(){}

    @Render('course-detail/create.hbs')
    @Get('create')
    async create(){
        let courses = await this.courseService.findAll();
        let categories = await this.categoryService.findAll();
        let topics = await this.topicService.findAll();
        let trainers = await this.trainerService.findAll();
        console.log(courses);
        return {courses : courses, categories: categories, topics: topics, trainers: trainers}
    }

    @Post('create')
    async createOne(@Res() res,@Body() createDetail : CreateDetailDto){
       // await this.detailService.create(createDetail); 

       console.log(createDetail);
       // res.status(302).redirect('/course-detail/index')      
    }

}
