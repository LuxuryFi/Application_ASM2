import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseDetail } from 'src/database/entities/coursedetail.entity';
import { Repository } from 'typeorm';
import { CreateDetailDto } from './dto/create-coursedetail';

@Injectable()
export class CourseDetailService {
    constructor(@InjectRepository(CourseDetail) private coursedetailRepository : Repository<CourseDetail>){}

    async create(createDetail : CreateDetailDto){
         let coursedetail = await this.coursedetailRepository.create(createDetail);  
         await this.coursedetailRepository.save(coursedetail);
    }
}
