const Sequelize = require('sequelize');
const database = require('../db');

const Fabricante = database.define('fabricante', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.STRING,
    descricao: Sequelize.STRING
})




module.exports = Fabricante;