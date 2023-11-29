import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {

  const httpsOptions = (process.env.PROD === "true") ? {
    key: fs.readFileSync('/root/ssl/key.pem'),
    cert: fs.readFileSync('/root/ssl/cert.pem'),
  } : {};

  if (process.env.PROD === "true") console.log('running PROD');

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Asteroids API')
    .setDescription('API for handling users')
    .setVersion('1.0')
    .addTag('asteroids')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3003);
}
bootstrap();


