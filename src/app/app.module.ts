import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../components/user/user.module';
import { ormModule } from '../config/db_config';

@Module({
  imports: [ormModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
