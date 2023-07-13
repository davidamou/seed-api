import mongoose from 'mongoose';
import UserInterface from './user.interface';

const userSchema = new mongoose.Schema<UserInterface>({
  lastName: String,
  firstName: String,
  photoUrl: String,
  age: Number,
});

const User = mongoose.model<UserInterface>('User', userSchema);
export default User;
