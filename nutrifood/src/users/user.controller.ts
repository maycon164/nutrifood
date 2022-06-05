import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

interface UserLogin {
  email: string,
  password: string
}

@Controller('users')
export class UserController {
  constructor(
    private readonly service: UserService,
  ) { }

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

}
