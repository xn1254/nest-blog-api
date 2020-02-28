/*
 * @Author: your name
 * @Date: 2020-02-27 15:47:46
 * @LastEditTime: 2020-02-27 21:08:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-blog-api\src\posts\post.model.ts
 */
import { prop } from '@typegoose/typegoose';

export class Post {
    @prop()
    title: string
    @prop()
    content: string
}
