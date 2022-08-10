import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/database/repository/UserRepository';
import { RepositoryModule } from 'src/database/repository/repository.module';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})

export class UserModule { }
