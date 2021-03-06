import { Inject, Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY') private readonly orderRepository: typeof Order,
  ) { }

  async makeOrder(order) {
    return await this.orderRepository.create(order);
  }

  async getAllOrders() {
    return await this.orderRepository.findAll();
  }
}
