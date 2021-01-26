import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { join } from 'path';
import * as handlebars from 'handlebars';
import * as hbs from 'hbs';
import * as fs from 'fs'


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter(),);


  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public',
  })

  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  handlebars.registerPartial('header',handlebars.compile(fs.readFileSync(join(__dirname, '..', 'views/partials/header.hbs'), 'utf-8')));
  handlebars.registerPartial('main',handlebars.compile(fs.readFileSync(join(__dirname, '..', 'views/partials/main.hbs'), 'utf-8')));
  handlebars.registerPartial('footer',handlebars.compile(fs.readFileSync(join(__dirname, '..', 'views/partials/footer.hbs'), 'utf-8')));

 // hbs.registerPartial(join(__dirname, "../", "/views/partials"));
  await app.listen(3000 , '0.0.0.0');
}
bootstrap();
