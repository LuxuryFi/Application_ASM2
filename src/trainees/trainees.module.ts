import { Module } from '@nestjs/common';
import { TraineesService } from './trainees.service';
import { TraineesController } from './trainees.controller';

@Module({
  providers: [TraineesService],
  controllers: [TraineesController]
})
export class TraineesModule {}
