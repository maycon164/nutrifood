import { Order } from './order.entitie';

export const orderProvider = [
  {
    provide: 'ORDER_REPOSITORY',
    useValue: Order,
  },
];
