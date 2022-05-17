import { Sequelize } from 'sequelize-typescript';
import { Order } from 'src/orders/entities/order.entitie';
import { Snack } from 'src/snack/entities/snack.entitie';
import { User } from 'src/users/entities/user.entitie';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'SA',
        password: 'Maycon@123',
        database: 'nutrifood',
        define: {
          timestamps: true,
          underscored: true,
        },
      });
      sequelize.addModels([Snack, User, Order]);

      User.hasMany(Order, { foreignKey: 'id_user' });
      Order.belongsTo(User, { foreignKey: 'id_user' });
      Snack.hasMany(Order, { foreignKey: 'id_snack' });
      Order.belongsTo(Snack, { foreignKey: 'id_snack' });

      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
