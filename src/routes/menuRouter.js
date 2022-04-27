const express = require('express');
const Router = express.Router();
const menuController = require('../controllers/menuController');

Router.get('/', menuController.apiGetMenu);

export default = Router;