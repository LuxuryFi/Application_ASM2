import { Body, Controller, Get, Post, Query, Render, Req, Res } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { CourseDetailService } from 'src/course-detail/course-detail.service';
import { TraineesService } from 'src/trainees/trainees.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
    constructor(
        private readonly detailService: CourseDetailService,
        private readonly enrollmentService: EnrollmentsService,
        private readonly traineeService: TraineesService
    ){}

    @Render('enrollments/index.hbs')
    @Get('index')
    async index(){
        let enrollments =await this.enrollmentService.findAll();
        var coursedetails = [];

        for (var i = 0; i < enrollments.length; i++) {
            let coursedetail = await this.detailService.findOne(enrollments[i].course_id,enrollments[i].topic_id,enrollments[i].trainer_id)
            coursedetails.push(coursedetail);
        }
       
        return {coursedetails : coursedetails, enrollments: enrollments}
    }

    @Render('enrollments/create.hbs')
    @Get('create')
    async create(){
        let details = await this.detailService.findAll();
        let trainees = await this.traineeService.findAll();
        console.log(trainees);
        return {details: details, trainees: trainees}
    }

    @Post('create')
    async createOne(@Body() createEnrollment : CreateEnrollmentDto, @Res() res){
       await this.enrollmentService.create(createEnrollment);
        res.status(302).redirect('/enrollments/create')
    }

    @Get('detail')
    async detail(@Res()  res, @Query() query){
         let trainees = await this.enrollmentService.findAllTrainee(query.course_id,query.topic_id,query.trainer_id);
       
        console.log(trainees)
    }
    

}   
