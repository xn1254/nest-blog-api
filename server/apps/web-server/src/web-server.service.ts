import { Injectable } from '@nestjs/common';

@Injectable()
export class WebServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
