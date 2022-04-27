const MenuModel = require('../model/MenuModel');

async function getMenu() {
  const menu = await MenuModel.find();
  return menu;
}

module.exports = {
  getMenu,
};
