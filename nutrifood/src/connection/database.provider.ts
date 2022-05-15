import { Sequelize } from 'sequelize-typescript';
import { Lanche } from '../lanche/entities/lanche.entitie';

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
      sequelize.addModels([Lanche]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
