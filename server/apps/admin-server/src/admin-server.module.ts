/*
 * @Author: your name
 * @Date: 2021-09-14 15:51:09
 * @LastEditTime: 2021-09-15 13:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \个人博客\server\apps\admin-server\src\admin-server.module.ts
 */
import { Module } from '@nestjs/common';
import { AdminServerController } from './admin-server.controller';
import { AdminServerService } from './admin-server.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminUser } from './user/user.entity';

@Module({
  imports: [
    AuthModule, 
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xn19960625',
      database: 'blog',
      entities: [AdminUser],
      synchronize: true,
    }),
  ],
  controllers: [AdminServerController, UserController],
  providers: [AdminServerService],
})
export class AdminServerModule {}
