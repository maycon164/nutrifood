import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SnackModule } from './snack/snack.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './database/repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RepositoryModule,
    AuthModule,
    UserModule,
    SnackModule,
    OrderModule,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'images') }),
  ],
  controllers: [],
  providers: [
  ],
})

export class AppModule { }
