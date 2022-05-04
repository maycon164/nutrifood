const Prato = require('../model/Prato');

async function getPratos(){
  const pratos = await Prato.findAll();
  return pratos;
}

module.exports = {
  getPratos
};
