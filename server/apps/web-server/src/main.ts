import { NestFactory } from '@nestjs/core';
import { WebServerModule } from './web-server.module';

async function bootstrap() {
  const app = await NestFactory.create(WebServerModule);
  await app.listen(3000);
}
bootstrap();
