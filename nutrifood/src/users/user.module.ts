import { Module } from '@nestjs/common';
import { userProvider } from './entities/user.provider';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...userProvider],
  exports: [UserService]
})
export class UserModule { }
