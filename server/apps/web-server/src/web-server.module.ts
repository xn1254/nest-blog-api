import { Module } from '@nestjs/common';
import { WebServerController } from './web-server.controller';
import { WebServerService } from './web-server.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [WebServerController, UserController],
  providers: [WebServerService],
})
export class WebServerModule {}
