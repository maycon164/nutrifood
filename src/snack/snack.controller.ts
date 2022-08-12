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
  UseGuards
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SnackDTO } from './entities/SnackDTO';
import { SnackService } from './snack.service';

const storage = {
  storage: diskStorage({}),
  fileFilter: (req, file, cb) => {
    cb(null, true);
    return;
  }
}

@Controller('snacks')
@ApiTags('snacks')
export class SnackController {
  constructor(private readonly service: SnackService) { }

  @Get()
  getAllSnacks(): Promise<any[]> {
    return this.service.getAllSnacks();
  }

  @Get('/:category')
  getAllSnacksByCategory(
    @Param('category') category: string,
  ): Promise<any[]> {
    return this.service.getSnacksByCategory(category);
  }

  @Get('/snack/:id')
  async getSnackById(@Param('id') id: number) {
    const snack = await this.service.getSnackById(id);
    return snack;
  }

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @UseInterceptors(FileInterceptor('file', storage))
  async updateSnack(@Param('id') id: number, @UploadedFile() file, @Body() snack: SnackDTO) {

    const snackUpdated = await this.service.updateSnack(id, snack, file);

    if (snackUpdated) {
      return { message: 'successfully updated' };
    }

    return { message: 'could not update' };
  }

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteSnack(@Param('id') id: number) {
    const snackDeleted = await this.service.deleteSnack(id);
    if (snackDeleted) {
      return { message: 'successfully deleted' };
    }
    return { message: 'could not delete' };
  }

  @UseGuards(AdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post('')
  @UseInterceptors(FileInterceptor('file', storage))
  insertSnack(@UploadedFile() file, @Body() snack: SnackDTO) {

    const snackInserted = this.service.insertSnack(snack, file);

    if (snackInserted) {
      return { message: "sucessfully inserted" }
    }

  }

}

