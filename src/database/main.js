const {Sequelize} = require('sequelize');

const Prato = require('../model/Prato');
const sequelize = require('./connection');

(async() => {
    await Prato.sync();

    /*let PratoEx = Prato.build({nome: "Macarrão", tipo: "Massas", preco: 12.99});
    await PratoEx.save();*/

    let pratos = await Prato.findAll();

    pratos.forEach(p => console.log(JSON.stringify(p)));

});
