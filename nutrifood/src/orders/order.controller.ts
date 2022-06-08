import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException, ConsoleLogger } from '@nestjs/common';
import { Order } from 'sequelize/types';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) { }

  @Get()
  getAllOrders() {
    return this.service.getAllOrders();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  makeOrder(@Body() order, @Request() req) {
    const { user } = req;

    if (user.userId) {
      return this.service.makeOrder({ id_user: user.userId, ...order });
    } else {
      throw new UnauthorizedException();
    }

  }
}
