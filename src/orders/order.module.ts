import { Module } from '@nestjs/common';
import { OrderRepository } from 'src/database/repository/OrderRepository';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule { }
