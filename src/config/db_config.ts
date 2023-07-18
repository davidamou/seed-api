import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { User } from '../components/user/user.entity';

export const ormModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPass,
  database: config.dbName,
  entities: [User],
  synchronize: false,
});
