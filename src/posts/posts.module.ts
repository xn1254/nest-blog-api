/*
 * @Author: your name
 * @Date: 2020-02-27 16:03:03
 * @LastEditTime: 2020-02-27 21:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-blog\src\posts\posts.module.ts
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { Post } from './post.model';

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  controllers: [PostsController]
})
export class PostsModule {}
