const express = require('express');
const Router = express.Router();
const pratoController = require('../controllers/pratoController');

Router.get('/', pratoController.apiGetPratos);
 module.exports = Router;