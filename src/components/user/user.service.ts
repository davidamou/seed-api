import { Injectable } from '@nestjs/common';
import createUserDto from './dtos/create.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(user: createUserDto) {
    try {
      return await this.create(user);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async update(id: number, user: any) {
    return await this.usersRepository.update({ id }, user);
  }

  async delete(id: number) {
    return await this.usersRepository.delete({ id });
  }
}
