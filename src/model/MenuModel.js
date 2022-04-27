const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  massas: [String],
  bebidas: [String],
  sobremesas: [String],
});

export 