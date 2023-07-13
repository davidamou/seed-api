import mongoose from 'mongoose';
import { config } from '../config/config';

// Cette fonction permet de se connecter à la base de données
export const connectDataBase = async () => {
  try {
    await mongoose.createConnection(config.dbUrl).asPromise();
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
};
