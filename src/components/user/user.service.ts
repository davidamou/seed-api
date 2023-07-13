import { Injectable } from '@nestjs/common';
import createUserDto from './dtos/create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(user: createUserDto) {
    try {
      return await this.userModel.create({ ...user });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async findAll() {
    return await this.userModel.find();
  }

  async update(id: string, user: any) {
    return await this.userModel.updateOne({ _id: id }, user);
  }

  async delete(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }
}
