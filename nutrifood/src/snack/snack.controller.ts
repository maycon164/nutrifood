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
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { Snack } from './entities/snack.entity';
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
  constructor(private readonly service: SnackService) { }

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

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Put('/:id')
  @HttpCode(200)
  async updateSnack(@Param('id') id: number, @Body() snack: Snack) {
    const rowsAffected = await this.service.updateSnack(id, snack);
    if (rowsAffected[0] > 0) {
      return { message: 'successfully updated' };
    }
    return { message: 'could not update' };
  }

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(200)
  async deleteSnack(@Param('id') id: number) {
    const rowsAffected = await this.service.deleteSnack(id);
    if (rowsAffected > 0) {
      return { message: 'successfully deleted' };
    }
    return { message: 'could not delete' };
  }

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post('')
  @UseInterceptors(FileInterceptor('file', storage))
  insertSnack(@UploadedFile() file, @Body() snack: Snack) {

    const snackData = snack;
    snackData.image = `http://localhost:3000/${file.filename}`;
    const snackInserted = this.service.insertSnack(snackData);
    if (snackInserted) {
      return { message: "sucessfully inserted" }
    }
  }

}

