import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/services/images/cloudinary.service';
import { SnackRepository } from '../database/repository/SnackRepository';
import { SnackDTO } from './entities/SnackDTO';

@Injectable()
export class SnackService {
  constructor(
    private readonly snackRepository: SnackRepository,
    private readonly cloudinaryService: CloudinaryService,
  ) { }

  async insertSnack(snack: SnackDTO, file: Express.Multer.File) {

    const snackSaved = await this.snackRepository.insert(snack, file);
    return snackSaved;

  }

  async updateSnack(id: number, snack: SnackDTO, file?: Express.Multer.File) {
    if (file) return this.snackRepository.update(id, snack, file);
    return this.snackRepository.update(id, snack);


  }

  async getSnacksByCategory(category: string) {
    return this.snackRepository.findBy({ category });
  }

  async getSnackById(id: number) {
    const snack = await this.snackRepository.findById(id);
    return snack;
  }

  async getAllSnacks() {
    return this.snackRepository.findAll();
  }

  async deleteSnack(id: number) {
    return this.snackRepository.delete(id)
  }
}
