import { Snack } from './snack.entity';

export const snackProvider = [
  {
    provide: 'SNACK_REPOSITORY',
    useValue: Snack,
  },
];
