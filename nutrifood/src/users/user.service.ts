import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entitie';
import { User } from './entities/user.entitie';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof User,
  ) { }

  async insertUser(user) {
    const snackSaved = await this.userRepository.create(user);
    return snackSaved;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getOrderByUser(id: number) {
    const userAndOrders = await this.userRepository.findOne({
      where: { id: id },
      include: Order,
    });

    return userAndOrders;
  }

  async findOneByEmail(email: string): Promise<User> {

    const user = this.userRepository.findOne({ where: { email: email } });
    return user;

  }
}
