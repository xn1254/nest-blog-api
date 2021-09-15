/*
 * @Author: your name
 * @Date: 2021-09-15 14:09:06
 * @LastEditTime: 2021-09-15 17:27:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\user\user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import RegisterDto from './dto/register.dto';
import { AdminUser } from './user.entity';

// crud操作
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(AdminUser)
        private usersRepository: Repository<AdminUser>
    ) {}

    findAll(): Promise<AdminUser[]> {
        return this.usersRepository.find()
    }

    findOne(id: string): Promise<AdminUser> {
        return this.usersRepository.findOne(id)
    }

    async removeOne(id: string): Promise<void> {
        await this.usersRepository.delete(id)
    }

    async registerOne(data: RegisterDto): Promise<RegisterDto> {
        const result = await this.usersRepository.create(data)
        return result
    }
}
