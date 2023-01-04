import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { SnackModule } from './snack/snack.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './database/repository/repository.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HandlePrismaExceptions } from './common/interceptors/HandlePrismaExceptions.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RepositoryModule,
    AuthModule,
    UserModule,
    SnackModule,
    OrderModule,
    //ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'images') }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HandlePrismaExceptions
    }
  ],
})

export class AppModule { }
