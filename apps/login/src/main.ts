import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LoginModule } from './login.module';

async function bootstrap() {
  const app = await NestFactory.create(LoginModule);

  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('API for handling users')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);



  await app.listen(3000);
}
bootstrap();
