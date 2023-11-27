import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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


