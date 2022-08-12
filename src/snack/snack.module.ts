import { Module } from '@nestjs/common';
import { SnackRepository } from 'src/database/repository/SnackRepository';
import { CloudinaryService } from 'src/services/images/cloudinary.service';
import { ServicesModule } from 'src/services/services.module';
import { SnackController } from './snack.controller';
import { SnackService } from './snack.service';

@Module({
  imports: [ServicesModule],
  controllers: [SnackController],
  providers: [SnackService, SnackRepository, CloudinaryService],
})
export class SnackModule { }
