import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entitie';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUsers() {
    return this.service.getAllUsers();
  }

  @Get('/:id/orders')
  async getOrders(@Param('id') id: number) {
    return await this.service.getOrderByUser(id);
  }

  @Post()
  async insertUser(@Body() user: User) {
    return this.service.insertUser(user);
  }

  @Post('/login')
  async login(@Body() userlogin: { email: string; password: string }) {
    return { message: 'not implemented!!!' };
  }
}