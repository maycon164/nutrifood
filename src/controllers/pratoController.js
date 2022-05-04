const pratoService = require('../service/pratoService');

async function apiGetPratos(req, res)  {
  const pratos = await pratoService.getPratos();
  res.status(200).json(pratos);  
}

async function apiSavePrato(req, res){
  const prato = req.body;
  console.log(req.body)
  const pratoSaved = await pratoService.savePrato(prato);
  res.status(200).json(pratoSaved);
}

async function apiDeletePrato(req, res){
  const idPrato = req.params.id;
  const result = await pratoService.deletePrato(idPrato);
  res.status(200).json(result);
}

async function apiUpdatePrato(req, res){
  const idPrato = req.params.id;
  const prato = req.body;
  const pratoUpdated = await pratoService.updatePrato(idPrato, prato);
  res.status(200).json(pratoUpdated)
}

module.exports = {
  apiGetPratos,
  apiSavePrato,
  apiDeletePrato,
  apiUpdatePrato
}