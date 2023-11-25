import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Users profile API')
    .setDescription('API for handling users')
    .setVersion('1.0')
    .addTag('favorites')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3002);
}
bootstrap();


