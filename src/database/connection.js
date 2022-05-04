const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');

const connection = new Sequelize(dbConfig);

/*
connection.authenticate()
.then(function(){console.log("Connection established")})
.catch(function(error){console.log("Unable to connect: ", error)})
*/

module.exports = connection;