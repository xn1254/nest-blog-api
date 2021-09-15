/*
 * @Author: your name
 * @Date: 2021-09-15 16:49:56
 * @LastEditTime: 2021-09-15 16:51:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\user\dto\register.dto.ts
 */
import { ApiProperty } from "@nestjs/swagger";

export default class RegisterDto {
    @ApiProperty()
    username: string
    @ApiProperty()
    password: string
}