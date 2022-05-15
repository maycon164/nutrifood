import { Module } from '@nestjs/common';
import { LancheController } from './lanche.controller';
import { LancheService } from './lanche.service';
import { lancheProvider } from './entities/lanche.provider';

@Module({
  imports: [],
  controllers: [LancheController],
  providers: [LancheService, ...lancheProvider],
})
export class LancheModule {}
