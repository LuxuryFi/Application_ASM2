import { Controller, Get, Post, Query, Render, Req, Res } from '@nestjs/common';
import { TraineesService } from './trainees.service';
import * as path from 'path'
import { CreateTraineeDto } from './dto/create-trainee.dto';
import * as fs from 'fs';
import { UpdateTraineeDto } from './dto/update-trainee.dto';



@Controller('trainees')
export class TraineesController {
    constructor(private readonly traineeService : TraineesService){}

    @Render('trainees/index.hbs')
    @Get('index')
    async index(){
        let trainees = await this.traineeService.findAll();
        return {trainees : trainees}
    }

    @Render('trainees/create.hbs')
    @Get('create')
    create(){}

    @Post('create')
    async createOne(@Req() req, @Res() res){
        const files = await req.saveRequestFiles();
        const destination = path.join(__dirname , '/../' , '/../', 'public/uploads/trainees/', files[0].filename);
        console.log(files[0])
        try {
            const data = files[0].fields;
            let createTrainee = new CreateTraineeDto(
                data.trainee_firstname.value,
                data.trainee_lastname.value,
                data.trainee_email.value,
                data.trainee_phone.value,
                data.trainee_address.value,
                data.password.value,
                files[0].filename
            )

            const tmp_file = files[0].filepath;
            fs.copyFileSync(tmp_file,destination);
            await this.traineeService.create(createTrainee);
            res.status(302).redirect('/trainees/index')
        } catch (error) {

        }

    }

    @Render('trainees/detail.hbs')
    @Get('detail')
    async detail(@Query() query){
        let trainee = this.traineeService.findOne(query.id);
        return {trainee : trainee}
    }

    @Render('trainees/update.hbs')
    @Get('update')
    async update(@Query() query){
        let trainee = await this.traineeService.findOne(query.id);
        console.log(trainee)
        return {trainee : trainee}
    }

    @Post('update')
    async updateOne(@Query() Query,@Res() res, @Req() req){
        const files = await req.saveRequestFiles();        
        const folder = path.join(__dirname, '../' , '../' , '/public/uploads/trainees/');
        const destination =  path.join(folder,files[0].filename);
        const data = files[0].fields;
        const tmp_file = files[0].filepath


        try {
            let avatar = files[0].filepath;
            let old_image = path.join(folder, data.old_image.value)

            if (!files[0].filename) avatar = data.old_image.value
            else {
                if (data.old_image.value && fs.existsSync(old_image)){
                    fs.unlinkSync(old_image);
                }
                fs.copyFileSync(tmp_file, destination);
            }
            
            let updateTrainee = new UpdateTraineeDto(
                data.id.value,
                data.trainee_firstname.value,
                data.trainee_lastname.value,
                data.trainee_email.value,
                data.trainee_phone.value,
                data.trainee_address.value,
                data.password.value,
                avatar   
            );   
                
            await this.traineeService.update(updateTrainee);
            res.status(302).redirect('/trainees/index')


        } catch (error) {
            
        }
    }

}
