import { Lanche } from './lanche.entitie';

export const lancheProvider = [
  {
    provide: 'LANCHE_REPOSITORY',
    useValue: Lanche,
  },
];
