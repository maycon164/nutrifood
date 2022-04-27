const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  massas: [String],
  bebidas: [String],
  sobremesas: [String],
});

exports.Menu = mongoose.model('Menu', menuSchema);
