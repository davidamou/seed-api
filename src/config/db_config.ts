import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../components/user/user.entity';
import { appConfig } from './app.config';

export const ormModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: appConfig.dbHost,
  port: appConfig.dbPort,
  username: appConfig.dbUser,
  password: appConfig.dbPass,
  database: appConfig.dbName,
  entities: [User],
  synchronize: false,
});
