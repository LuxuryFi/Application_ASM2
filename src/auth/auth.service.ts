import { Injectable } from '@nestjs/common';
import { TraineesService } from 'src/trainees/trainees.service';

@Injectable()
export class AuthService {
    constructor(private traineeService: TraineesService) {}
  
    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.traineeService.findByEmail(username,pass);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  }
