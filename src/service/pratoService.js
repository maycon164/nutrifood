const { update } = require('../model/Prato');
const Prato = require('../model/Prato');

async function getPratos(){
  const pratos = await Prato.findAll();
  return pratos;
}

async function savePrato(prato){
  const savedPrato = await Prato.create(prato);
  return savedPrato;
}

async function updatePrato(idPrato, prato){
  const {nome, tipo, preco} = prato;
  const updatedPrato = await Prato.findOne({where: {id: idPrato}});
  
  updatedPrato.nome = nome;
  updatedPrato.tipo = tipo;
  updatedPrato.preco = preco;

  await updatedPrato.save();

  return updatedPrato;
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
