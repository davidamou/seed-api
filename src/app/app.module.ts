import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../components/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from '../config/config';

@Module({
  imports: [MongooseModule.forRoot(config.dbUrl), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
