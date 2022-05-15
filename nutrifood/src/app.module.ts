import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './connection/database.module';
import { LancheModule } from './lanche/lanche.module';

@Module({
  imports: [
    DatabaseModule,
    LancheModule,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'images') }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
