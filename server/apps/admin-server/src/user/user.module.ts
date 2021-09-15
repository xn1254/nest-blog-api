/*
 * @Author: your name
 * @Date: 2021-09-15 10:05:30
 * @LastEditTime: 2021-09-15 14:08:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\user\user.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { AdminUser } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminUser])],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
