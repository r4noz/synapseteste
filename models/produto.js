const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante')
const Categoria = require('./categoria')
const CategoriaProduto = require('./categoriaProduto')

const Produto = database.define('produto', {
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

Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
})

Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
})

Produto.belongsToMany(Categoria, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idProduto',
    constraint: true
})

Categoria.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idCategoria',
    constraint: true

})

Produto.hasMany(CategoriaProduto, { foreignKey: 'idProduto'});
CategoriaProduto.belongsTo(Produto, { foreignKey: 'idProduto'});
Categoria.hasMany(CategoriaProduto, { foreignKey: 'idCategoria'});
CategoriaProduto.belongsTo(Categoria, { foreignKey: 'idCategoria'});


module.exports = Produto;