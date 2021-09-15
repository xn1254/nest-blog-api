/*
 * @Author: your name
 * @Date: 2021-09-14 15:51:09
 * @LastEditTime: 2021-09-15 11:45:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AdminServerModule } from './admin-server.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AdminServerModule);
  app.enableCors()
  const swgOption = new DocumentBuilder()
    .setTitle('blog-admin-接口文档')
    .setDescription('供admin后台调用的接口')
    .setVersion('1.0').build()
  const swgDocument = SwaggerModule.createDocument(app, swgOption)
  SwaggerModule.setup('api-doc', app, swgDocument)
  await app.listen(3000);
}
bootstrap();
