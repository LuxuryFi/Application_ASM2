import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from 'src/database/entities/trainer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  providers: [TrainersService],
  controllers: [TrainersController]
})
export class TrainersModule {}
