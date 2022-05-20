import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Snack } from './entities/snack.entitie';
import { SnackService } from './snack.service';

const storage = {
  storage: diskStorage({
    destination: './images',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  }),
};

@Controller('snack')
export class SnackController {
  constructor(private readonly service: SnackService) {}

  @Get()
  getAllSnacks(): Promise<Snack[]> {
    return this.service.getAllSnacks();
  }

  @Get('/:category')
  getAllSnacksByCategory(
    @Param('category') category: string,
  ): Promise<Snack[]> {
    return this.service.getSnacksByCategory(category);
  }

  @Get('/snack/:id')
  async getSnackById(@Param('id') id: number) {
    console.log('teste');
    const snack = await this.service.getSnackById(id);
    return snack;
  }

  @Put('/:id')
  @HttpCode(200)
  async updateSnack(@Param('id') id: number, @Body() snack: Snack) {
    const rowsAffected = await this.service.updateSnack(id, snack);
    if (rowsAffected[0] > 0) {
      return { message: 'successfully updated' };
    }
    return { message: 'could not update' };
  }

  @Delete('/:id')
  @HttpCode(200)
  async deleteSnack(@Param('id') id: number) {
    const rowsAffected = await this.service.deleteSnack(id);
    if (rowsAffected > 0) {
      return { message: 'successfully deleted' };
    }
    return { message: 'could not delete' };
  }

  @Post('')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file, @Body() snack: Snack) {
    const snackData = snack;
    snackData.image = `http://localhost:3000/${file.filename}`;
    return this.service.insertSnack(snackData);
  }
}
