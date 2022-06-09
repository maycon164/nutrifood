import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './entities/UserDTO';


@Injectable()
export class UserService {
  private userRepository;
  constructor(
    private readonly prisma: PrismaService
  ) {
    this.userRepository = this.prisma.user
  }

  async insertUser(user: UserDTO): Promise<null | UserDTO> {
    const userSaved = await this.userRepository.create({
      data: user
    });

    return userSaved;
  }

  async getAllUsers(): Promise<null | UserDTO[]> {

    const users = await this.userRepository.findMany();
    return users;

  }

  /*async getOrderByUser(id: number) {
    const userAndOrders = await this.clientRepository.findOne({
      where: { id: id },
      include: Order,
    });

    return userAndOrders;
  }*/

  async findOneByEmail(email: string): Promise<UserDTO | null> {
    const user = this.prisma.user.findUnique({
      where: { email: email }
    });

    return user;
  }
}
