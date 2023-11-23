import { NestFactory } from '@nestjs/core';
import { LoginModule } from './login.module';

async function bootstrap() {
  const app = await NestFactory.create(LoginModule);
  await app.listen(3000);
}
bootstrap();
