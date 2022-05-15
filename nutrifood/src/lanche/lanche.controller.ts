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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Lanche } from './entities/lanche.entitie';
import { LancheService } from './lanche.service';

const storage = {
  storage: diskStorage({
    destination: './images',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  }),
};

@Controller('lanches')
export class LancheController {
  constructor(private readonly service: LancheService) {}

  @Post()
  insertLanche(@Body() lanche: Lanche) {
    return this.service.insert(lanche);
  }

  @Get()
  getAllLanches(): Promise<Lanche[]> {
    return this.service.getAllLanches();
  }

  @Get('/:categoria')
  getAllLanchesByCategory(@Param('categoria') categoria: string) {
    return this.service.getLanchesByCategory(categoria);
  }

  @Put('/:id')
  updateLanche(@Param('id') id: number, @Body() lanche: Lanche) {
    return this.service.updateLanche(id, lanche);
  }

  @Delete('/:id')
  deleteLanche(@Param('id') id: number) {
    return this.service.deleteLanche(id);
  }

  @Post('/image')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
