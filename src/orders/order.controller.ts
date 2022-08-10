import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException, ConsoleLogger, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderDTO } from './entities/OrderDTO';
import { OrderService } from './order.service';

@Controller('orders')
@ApiTags('orders')
export class OrderController {
  constructor(private readonly service: OrderService) { }

  @Get()
  getAllOrders() {
    return this.service.getAllOrders();
  }


  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  getOrderById(@Param("id") id: number) {
    return this.service.getOrderById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  makeOrder(@Body() order: OrderDTO, @Request() req) {
    const { user } = req;

    if (user.userId) {
      order.user = user.userId;

      return this.service.makeOrder(order);

    } else {
      throw new UnauthorizedException();
    }

  }
}
