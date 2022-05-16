import { User } from './user.entitie';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
