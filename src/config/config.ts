import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  mongoUrl: process.env.DB_URL,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10),
};
