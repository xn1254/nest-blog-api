/*
 * @Author: your name
 * @Date: 2020-02-23 14:22:55
 * @LastEditTime: 2020-02-25 20:46:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习\nest-blog-api\src\app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {
  // 通过依赖注入的方式将AppService类注入到构造函数中
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
