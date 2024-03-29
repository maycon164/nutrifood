import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { check } from 'prettier';
import { UserRepository } from '../database/repository/UserRepository';
import { UserDTO } from './entities/UserDTO';


@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {
  }

  async insertUser(user: UserDTO): Promise<null | UserDTO> {
    const checkEmail = await this.findOneByEmail(user.email);

    if (checkEmail) {
      throw new HttpException('Essa email ja esta cadastrado', HttpStatus.CONFLICT);
    }

    const userSaved = await this.userRepository.insert(user);
    return userSaved;
  }

  async getAllUsers(): Promise<null | UserDTO[]> {

    const users = await this.userRepository.findAll();
    return users;

  }

  async getOrderByUser(id: number) {
    const userAndOrders = await this.userRepository.getOrdersById(id);
    return userAndOrders;
  }

  async findOneByEmail(email: string): Promise<UserDTO | null> {
    const user = this.userRepository.findBy({ email });
    return user;
  }

  async getReport() {
    return this.userRepository.getReport();
  }
}

