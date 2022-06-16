import { Body, Controller, Get, Param, Post, UseGuards, Request, UnauthorizedException, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserDTO } from './entities/UserDTO';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly service: UserService,
  ) { }

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return this.service.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/orders')
  async getOrders(@Request() req) {

    const { user } = req;
    if (user.userId) {
      return await this.service.getOrderByUser(user.userId);
    } else {
      throw new UnauthorizedException();
    }
  }

  @UsePipes(ValidationPipe)
  @Post()
  async insertUser(@Body() user: UserDTO) {
    return this.service.insertUser(user);
  }

}
