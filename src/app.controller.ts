import { Controller, Get, Post, Render, UseGuards,Request, Session, Req} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import * as secureSession from 'fastify-secure-session';
import { LoginGuard } from './common/guard/login.guard';
import { AuthenticatedGuard } from './common/guard/authenticated.guard';
import { request } from 'http';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
   ) {}
  @Render('login/login.hbs')
  @Get('auth/login')
  getHello() {}

  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Request() req , @Session() session: secureSession.Session, ) {
    
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test')
  test(@Req() req){
  }

  @Get('test2')
  test2(@Req() req){
    console.log(req.session.get('test'));
  }
}
