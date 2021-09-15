/*
 * @Author: your name
 * @Date: 2021-09-15 11:47:06
 * @LastEditTime: 2021-09-15 15:54:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\user\user.entity.ts
 */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

// 生成user表结构
@Entity()
export class AdminUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string
}