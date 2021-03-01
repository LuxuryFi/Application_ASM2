import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { join } from 'path';
import * as handlebars from 'handlebars';
import * as fastifyCookie from 'fastify-cookie'
import * as fs from 'fs';
import * as layouts from 'handlebars-layouts'
import { ValidationPipe } from '@nestjs/common';
import fastifyMultipart from 'fastify-multipart'
import * as passport from 'passport'
import fastifyPassport from 'fastify-passport'
import * as fastifySession from 'fastify-session';
import * as flash from 'fastify-flash'
import  secureSession from 'fastify-secure-session'
async function bootstrap() {

  const fastifyAdapter = new FastifyAdapter();
  fastifyAdapter.register(require('fastify-multipart'))

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter,);

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  })

  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  app.register(secureSession, {
    secret: 'averylogphrasebiggerthanthirtytwochars',
    salt: 'mq9hDxBVDbspDR6n',
    cookie: {
      secure: false
    }
  }); 
  
  app.use(passport.initialize());
  app.use(passport.session());
  app.register(flash);


  handlebars.registerHelper('selected', function (options, value) {
    if (options == value) {
      return ' selected';
    } else {
      return ''
    }
  })

  handlebars.registerHelper('printTrainer', function(id, check) {
    check.forEach(element => {
       if (id == element.trainer_id){
        return check.trainer.element_firstname + ' ' + element.trainer.trainer_lastname;
      }
    });
    return '';
 });

  handlebars.registerPartial('layout', handlebars.compile(fs.readFileSync(join(__dirname, '..', 'views/layouts.hbs'), 'utf-8')));

  handlebars.registerHelper(layouts(handlebars));

  // hbs.registerPartial(join(__dirname, "../", "/views/partials"));
  //app.useGlobalPipes(new ValidationPipe({
  //  }));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
