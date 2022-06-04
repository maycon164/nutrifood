import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './connection/database.module';
import { SnackModule } from './snack/snack.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';
@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    SnackModule,
    UserModule,
    OrderModule,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'images') }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
