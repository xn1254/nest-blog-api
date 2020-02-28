/*
 * @Author: your name
 * @Date: 2020-02-23 14:22:55
 * @LastEditTime: 2020-02-27 21:07:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习\nest-blog-api\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 添加全局的请求数据校验
  app.useGlobalPipes(new ValidationPipe())

  // 自动生成swagger接口文档
  const options = new DocumentBuilder()
    .setTitle('nest博客api文档')
    .setDescription('博客接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5000);
}
bootstrap();
