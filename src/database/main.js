const {Sequelize} = require('sequelize');

const Prato = require('../model/Prato');
const sequelize = require('./connection');
/*
(async() => {
    await Prato.sync();

    let PratoEx = Prato.build({nome: "Macarrão", tipo: "Massas", preco: 12.99});
    await PratoEx.save();

    let pratos = await Prato.findAll();

    pratos.forEach(p => console.log(JSON.stringify(p)));

});
*/


(async() => {
    const service = require('../service/pratoService');

    /*const exemplo = await service.savePrato({nome:"Teste", tipo:"Teste", preco: 100});
    console.log(exemplo);*/

    /*const exemploUpdated = await service.updatePrato(3, {nome: "Teste Updated 2", tipo:"Teste Updated 2", preco: 7000});
    console.log(exemploUpdated);*/

    const exemploDeleted = await service.deletePrato(1);
    console.log(exemploDeleted);
})(); 