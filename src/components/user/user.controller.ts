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
      await this.userService.create(body);
      return res.status(HttpStatus.CREATED).json({ message: 'User created' });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // Cette fonction permet de récupérer un utilisateur par son id
  @Get(':id')
  async getUser(@Param('id') id: number, @Res() res: Response) {
    try {
      const data = await this.userService.findOne(id);
      return res.status(HttpStatus.OK).json(data);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // Récupérer tous les utilisateurs
  @Get()
  async getAllUsers(@Res() res: Response) {
    try {
      const data = await this.userService.findAll();
      return res.status(HttpStatus.OK).json(data);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // modification d'un utilisateur par son id
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() newData: any,
    @Res() res: Response,
  ) {
    try {
      await this.userService.update(id, newData);
      return res.status(HttpStatus.OK).json({ message: 'User updated' });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  // suppression d'un utilisateur par son id
  @Delete(':id')
  async deleteUser(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.userService.delete(id);
      return res.status(204).json({ message: 'User deleted' });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}
