import { Document } from 'mongoose';

export default interface UserInterface extends Document {
  lastName: string;
  firstName: string;
  photoUrl?: string;
  age: number;
}
