import { Injectable } from '@nestjs/common';
import User from './user.schema';
import createUserDto from './dtos/create.dto';

@Injectable()
export class UserService {
  async create(user: createUserDto) {
    try {
      return await User.create({ ...user });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    return await User.findOne({ _id: id });
  }

  async findAll() {
    return await User.find();
  }

  async update(id: string, user: any) {
    return await User.updateOne({ _id: id }, user);
  }

  async delete(id: string) {
    return await User.deleteOne({ _id: id });
  }
}
