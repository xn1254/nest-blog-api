/*
 * @Author: your name
 * @Date: 2020-02-23 14:41:50
 * @LastEditTime: 2020-02-27 15:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习\nest-blog-api\src\posts\posts.controller.ts
 */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

class CreateBlogBody {
    @ApiProperty({description: '标题'})
    title: string;
    @ApiProperty({description: '内容'})
    content: string;
}

@Controller('posts')
@ApiTags('博客')
export class PostsController {
    @Get()
    @ApiOperation({summary: '博客列表'})
    async index() {
        return await PostModel.find()
    }

    @Post()
    @ApiOperation({summary: '上传博客'})
    create(@Body() createBodyDto: CreateBlogBody) {
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({summary: '博客详情'})
    details(@Param('id') id: string) {
        return {
            id: 1,
            title: '123'
        }
    }

    @Put(':id')
    @ApiOperation({summary: '修改博客'})
    update(@Body() updateBodyDto: CreateBlogBody, @Param('id') id: string) {
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    remove(@Param('id') id: string) {
        return {
            success: true
        }
    }
}
