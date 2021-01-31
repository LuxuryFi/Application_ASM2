import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { join } from 'path';
import * as handlebars from 'handlebars';
;
import * as fs from 'fs';
import * as layouts from 'handlebars-layouts'
import { ValidationPipe } from '@nestjs/common';
import fastifyMultipart from 'fastify-multipart'

async function bootstrap() {

  const fastifyAdapter = new FastifyAdapter();
  fastifyAdapter.register(require('fastify-multipart'))

  const app = await NestFactory.create<NestFastifyApplication>(AppModule,fastifyAdapter,);

  app.useStaticAssets({
    root: join(__dirname, '..',  'public'),
    prefix: '/public/',
  })

  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });


  handlebars.registerPartial('layout',handlebars.compile(fs.readFileSync(join(__dirname, '..', 'views/layouts.hbs'), 'utf-8')));

  handlebars.registerHelper(layouts(handlebars));

 // hbs.registerPartial(join(__dirname, "../", "/views/partials"));
  //app.useGlobalPipes(new ValidationPipe({
//  }));
  await app.listen(3000 , '0.0.0.0');
}
bootstrap();
