import { Module } from '@nestjs/common';
import { SnackRepository } from 'src/database/implementations/SnackRepository';
import { SnackController } from './snack.controller';
import { SnackService } from './snack.service';

@Module({
  imports: [],
  controllers: [SnackController],
  providers: [SnackService, SnackRepository],
})
export class SnackModule { }
