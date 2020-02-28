/*
 * @Author: your name
 * @Date: 2020-02-23 14:41:50
 * @LastEditTime: 2020-02-28 10:55:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学习\nest-blog-api\src\posts\posts.controller.ts
 */
import { Controller, Get, Post, Body, Put, Param, Delete, Injectable  } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreateBlogBody {
    @ApiProperty({description: '标题'})
    @IsNotEmpty({message: '请填写标题'})
    title: string;
    @ApiProperty({description: '内容'})
    content: string;
}

@Controller('posts')
@ApiTags('博客')
@Injectable()
export class PostsController {
    constructor(
        // 通过依赖注入导入模型，对模型与控制器进行解耦
        @InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>
    ) {}

    @Get()
    @ApiOperation({summary: '博客列表'})
    async index() {
        return await this.PostModel.find()
    }

    @Post()
    @ApiOperation({summary: '上传博客'})
    async create(@Body() createBodyDto: CreateBlogBody) {
        await this.PostModel.create(createBodyDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({summary: '博客详情'})
    async details(@Param('id') id: string) {
        return await this.PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({summary: '修改博客'})
    async update(@Body() updateBodyDto: CreateBlogBody, @Param('id') id: string) {
        await this.PostModel.findByIdAndUpdate(id, updateBodyDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    async remove(@Param('id') id: string) {
        await this.PostModel.findByIdAndRemove(id)
        return {
            success: true
        }
    }
}
