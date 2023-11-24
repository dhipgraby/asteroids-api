import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LoginModule } from './auth.module';


async function bootstrap() {
  const app = await NestFactory.create(LoginModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Authentication API')
    .setDescription('API for handling users')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
