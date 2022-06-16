import { Inject, Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/database/implementations/OrderRepository';
import { OrderDTO } from './entities/OrderDTO';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository
  ) { }

  async makeOrder(order: OrderDTO) {
    return await this.orderRepository.insert(order);
  }

  async getAllOrders() {
    return await this.orderRepository.findAll();
  }
}
