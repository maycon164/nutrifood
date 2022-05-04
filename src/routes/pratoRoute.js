const { Route } = require('express');
const express = require('express');
const Router = express.Router();
const pratoController = require('../controllers/pratoController');

Router.get('/', pratoController.apiGetPratos);
Router.post('/', pratoController.apiSavePrato);
Router.put('/:id', pratoController.apiUpdatePrato);
Router.delete('/:id', pratoController.apiDeletePrato);

 module.exports = Router;