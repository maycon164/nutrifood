const { update } = require('../model/Prato');
const Prato = require('../model/Prato');

async function getPratos(){
  const pratos = await Prato.findAll();
  return pratos;
}

async function savePrato(prato){
  const pratoSaved = await Prato.create(prato);
  return pratoSaved;
}

async function updatePrato(idPrato, prato){
  const {nome, tipo, preco} = prato;
  const pratoUpdated = await Prato.findOne({where: {id: idPrato}});
  
  pratoUpdated.nome = nome;
  pratoUpdated.tipo = tipo;
  pratoUpdated.preco = preco;

  await pratoUpdated.save();

  return pratoUpdated;
}

async function deletePrato(idPrato){
  const prato = await Prato.destroy({where: {id: idPrato}});
  return prato == 1? true: false;
}


module.exports = {
  getPratos,
  savePrato,
  updatePrato,
  deletePrato
};
