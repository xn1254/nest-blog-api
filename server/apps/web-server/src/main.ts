/*
 * @Author: your name
 * @Date: 2021-09-14 15:50:50
 * @LastEditTime: 2021-09-14 17:49:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\web-server\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { WebServerModule } from './web-server.module';

async function bootstrap() {
  const app = await NestFactory.create(WebServerModule);
  await app.listen(3001);
}
bootstrap();
