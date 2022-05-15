import { Inject, Injectable } from '@nestjs/common';
import { Snack } from './entities/snack.entitie';

@Injectable()
export class SnackService {
  constructor(
    @Inject('SNACK_REPOSITORY')
    private readonly snackRepository: typeof Snack,
  ) {}

  async insertSnack(snack) {
    const snackSaved = await this.snackRepository.create(snack);
    return snackSaved;
  }

  async updateSnack(id: number, snack: Snack) {
    return this.snackRepository.update(snack, { where: { id: id } });
  }

  async getSnacksByCategory(category: string) {
    return this.snackRepository.findAll({ where: { category: category } });
  }

  async getAllSnacks() {
    return this.snackRepository.findAll();
  }

  async deleteSnack(id: number) {
    return this.snackRepository.destroy({ where: { id } });
  }
}
