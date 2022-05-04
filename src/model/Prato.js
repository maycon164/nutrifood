const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class Prato extends Model {}

Prato.init({
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  preco: {
    type: DataTypes.DECIMAL
  }
}, {
  // Other model options go here
  sequelize: sequelize, // We need to pass the connection instance
  modelName: 'Prato' // We need to choose the model name
});

// the defined model is the class itself
console.log(Prato === sequelize.models.Prato); // true

module.exports = Prato;