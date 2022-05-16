import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order } from 'sequelize/types';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get()
  getAllOrders() {
    return this.service.getAllOrders();
  }

  @Post()
  makeOrder(@Body() order: Order) {
    return this.service.makeOrder(order);
  }
}
