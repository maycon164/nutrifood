const pratoService = require('../service/pratoService');

async function apiGetPratos(req, res)  {
  
  const pratos = await pratoService.getPratos();
  res.status(200).json(pratos);  

}

module.exports = {
  apiGetPratos
}