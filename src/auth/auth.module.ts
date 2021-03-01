import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainee } from 'src/database/entities/trainee.entity';
import { TraineesModule } from 'src/trainees/trainees.module';
import { TraineesService } from 'src/trainees/trainees.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[TypeOrmModule.forFeature([Trainee])],
  providers: [AuthService,TraineesService,LocalStrategy]
})
export class AuthModule {}
