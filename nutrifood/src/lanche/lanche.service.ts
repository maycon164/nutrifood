import { Inject, Injectable } from '@nestjs/common';
import { where } from 'sequelize/types';
import { Lanche } from './entities/lanche.entitie';

@Injectable()
export class LancheService {
  constructor(
    @Inject('LANCHE_REPOSITORY')
    private readonly lancheRepository: typeof Lanche,
  ) {}

  async insert(lanche) {
    const lancheSaved = await this.lancheRepository.create(lanche);
    return lancheSaved;
  }

  updateLanche(id: number, lanche: Lanche) {
    return this.lancheRepository.update(lanche, { where: { id: id } });
  }

  getLanchesByCategory(categoria: string) {
    return this.lancheRepository.findAll({ where: { categoria: categoria } });
  }

  getAllLanches() {
    return this.lancheRepository.findAll();
  }

  deleteLanche(id: number) {
    return this.lancheRepository.destroy({ where: { id } });
  }
}
