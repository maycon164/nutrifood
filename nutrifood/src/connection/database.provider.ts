import { Sequelize } from 'sequelize-typescript';
import { Order } from 'src/orders/entities/order.entity';
import { Snack } from 'src/snack/entities/snack.entity';
import { User } from 'src/users/entities/user.entity';
import snackmock from '../mock/snackmock';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '../nutrifood-db',
      });
      sequelize.addModels([Snack, User, Order]);

      User.hasMany(Order, { foreignKey: 'id_user' });
      Order.belongsTo(User, { foreignKey: 'id_user' });
      Snack.hasMany(Order, { foreignKey: 'id_snack' });
      Order.belongsTo(Snack, { foreignKey: 'id_snack' });

      await sequelize.sync({ force: true });

      await User.create({
        name: 'Maycon',
        email: 'maycon@gmail.com',
        password: 'senha123',
        address: 'Rua Dos X',
        isAdmin: true,
        phone: '11943166799',
      });

      await User.create({
        name: 'Felipe',
        email: 'felipe@gmail.com',
        password: 'senha123',
        address: 'Rua Dos Felipes',
        isAdmin: false,
        phone: '11943166799',
      })

      snackmock.forEach(async (snack) => {
        await Snack.create(snack);
      });

      return sequelize;
    },
  },
];
