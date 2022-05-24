/* eslint-disable @typescript-eslint/no-var-requires */
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const snacksmock = require('./snackmock');

const connection = new Sequelize({
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

const Snack = connection.define('Snack', {
  name: DataTypes.STRING,
  value: DataTypes.DECIMAL,
  category: DataTypes.STRING,
  status: DataTypes.STRING,
  image: DataTypes.STRING,
});

async function main() {
  await connection.sync();

  snacksmock.forEach(async (snack) => {
    await Snack.create(snack);
  });
}

main();
