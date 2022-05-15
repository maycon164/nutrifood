import { Snack } from './snack.entitie';

export const snackProvider = [
  {
    provide: 'SNACK_REPOSITORY',
    useValue: Snack,
  },
];
