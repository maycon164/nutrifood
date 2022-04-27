const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  nome: String,
  valor: Number,
  tipo: String,
});

exports.Menu = mongoose.model('Menu', menuSchema);
