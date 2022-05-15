import { Module } from '@nestjs/common';
import { SnackController } from './snack.controller';
import { SnackService } from './snack.service';
import { snackProvider } from './entities/snack.provider';
@Module({
  imports: [],
  controllers: [SnackController],
  providers: [SnackService, ...snackProvider],
})
export class LancheModule {}
