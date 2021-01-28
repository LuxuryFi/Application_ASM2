import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from 'src/database/entities/trainer.entity';
import { CreateTopicDto } from 'src/topics/dto/create-topic.dto';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class TrainersService {
    constructor(@InjectRepository(Trainer) private trainerRepository: Repository<Trainer>){}

    async create(createTrainer : CreateTopicDto) : Promise<void> {
        let trainer = await this.trainerRepository.create(createTrainer);
        await this.trainerRepository.save(trainer);
    }

    async findOne(id:number) : Promise<Trainer> {
        return await this.trainerRepository.findOne(id);
    }

    async findAll() : Promise<Trainer[]> {
        return await this.trainerRepository.find();
    }

    async update(updateTrainer : UpdateTrainerDto) : Promise<void> {
        await this.trainerRepository.update(
            {id : updateTrainer.id},
            {
                trainer_address : updateTrainer.trainer_address,
                trainer_firstname: updateTrainer.trainer_firstname,
                trainer_lastname: updateTrainer.trainer_lastname,
                trainer_email: updateTrainer.trainer_email,
                trainer_phone: updateTrainer.trainer_phone
            }
        )
    }
    
    async delete(id:number) : Promise<void> {
        await this.trainerRepository.delete(id);
    }
}
