import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  getHello(): string {
    return 'Api is status 200';
  }
}
