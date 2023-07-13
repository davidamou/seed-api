import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  dbUrl: process.env.DB_URL,
};
