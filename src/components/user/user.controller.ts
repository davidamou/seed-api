import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Cette méthode permet de créer un utilisateur
  @Post()
  async addUser(@Body() body: any, @Res() res: Response) {
    try {
      const r = await this.userService.create(body);
      r.save();
      return res.status(HttpStatus.CREATED).json({ message: 'User created' });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // Cette fonction permet de récupérer un utilisateur par son id
  @Get(':id')
  getUser(@Param('id') id: string, @Res() res: Response) {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // Récupérer tous les utilisateurs
  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  // modification d'un utilisateur par son id
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() newData: any) {
    return `user ${id} is modify: ${newData}`;
  }

  // suppression d'un utilisateur par son id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
