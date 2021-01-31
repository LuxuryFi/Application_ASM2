import { MiddlewareConsumer, Module } from '@nestjs/common';
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
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express/multer';
import { MulterMiddleware } from './trainers/trainers.middleware';
import { TrainersController } from './trainers/trainers.controller';

@Module({
  imports: [CategoriesModule,
     CoursesModule, 
     TopicsModule, 
     TrainersModule, 
     CourseDetailModule, 
     StaffsModule, 
     AdminModule, 
     TraineesModule,
     TypeOrmModule.forRoot(),
    MulterModule.register({
      dest: '/public/uploads',
    }
    ) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(MulterMiddleware).forRoutes('/trainers/:splat*');
  }
}
