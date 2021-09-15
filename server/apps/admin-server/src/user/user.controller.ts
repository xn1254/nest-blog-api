/*
 * @Author: your name
 * @Date: 2021-09-15 09:36:23
 * @LastEditTime: 2021-09-15 16:20:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\user\user.controller.ts
 */
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service'

// api接口
@Controller('user')
@ApiTags('用户')
export class UserController {
    constructor (
        private readonly UserService: UserService
    ) {}

    @Get()
    findAll() {
        return this.UserService.findAll()
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: '用户id'
    })
    findById(@Query() req) {
        return this.UserService.findOne(req.id)
    }

    @Delete('deleteOne')
    @ApiQuery({
        name: 'id',
        description: '用户id'
    })
    deleteById(@Query() req) {
        return this.UserService.removeOne(req.id)
    }

    @Post('registerUser')
    @ApiQuery({
        name: 'username',
        description: '用户名',
        required: true
    })
    @ApiQuery({
        name: 'password',
        description: '密码',
        required: true
    })
    updateById(@Body() req) {
        return this.UserService.registerOne(req)
    }
}
