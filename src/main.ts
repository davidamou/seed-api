import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from './config/config';
import { connectDataBase } from './services/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectDataBase();
  await app.listen(config.port);
}
bootstrap();
