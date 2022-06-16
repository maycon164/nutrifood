import { Module } from '@nestjs/common';
import { orderProvider } from '../sequelize/entities/order.provider';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule { }
