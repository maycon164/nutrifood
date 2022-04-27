const menuService = require('../service/menuService');

async const apiGetMenu(req, res)  {
  const menu = await menuService.getMenu();
  res.status(200).json(menu);  
}

module.exports = {
  apiGetMenu
}