import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { TopicsModule } from './topics/topics.module';
import { TrainersModule } from './trainers/trainers.module';
import { CourseDetailModule } from './course-detail/course-detail.module';
import { StaffsModule } from './staffs/staffs.module';
import { AdminModule } from './admin/admin.module';
import { TraineesModule } from './trainees/trainees.module';

@Module({
  imports: [CategoriesModule, CoursesModule, TopicsModule, TrainersModule, CourseDetailModule, StaffsModule, AdminModule, TraineesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
