import { Module } from '@nestjs/common';
import { LoginController } from './auth.controller';
import { LoginService } from './auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule { }
