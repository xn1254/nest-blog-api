import { Module } from '@nestjs/common';
import { WebServerController } from './web-server.controller';
import { WebServerService } from './web-server.service';

@Module({
  imports: [],
  controllers: [WebServerController],
  providers: [WebServerService],
})
export class WebServerModule {}
