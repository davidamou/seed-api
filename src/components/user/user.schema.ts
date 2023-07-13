import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  userId: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  photoUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
