import { Injectable } from '@nestjs/common';
import { SnackRepository } from 'src/database/repository/SnackRepository';
import { SnackDTO } from './entities/SnackDTO';

@Injectable()
export class SnackService {
  constructor(
    private readonly snackRepository: SnackRepository
  ) { }

  async insertSnack(snack: SnackDTO) {
    const snackSaved = await this.snackRepository.insert(snack);
    return snackSaved;
  }

  async updateSnack(id: number, snack: SnackDTO) {
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
