import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  //
  create(user: any) {
    return user;
  }

  //
  findOne(id: string) {
    return { name: 'John Doe', age: 25, id: id };
  }

  delete(id: string) {
    return `user with use ${id} is delete`;
  }
}
