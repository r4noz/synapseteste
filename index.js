(async () => {

    const database = require('./db');
    const Produto = require('./models/produto');
    const Fabricante = require('./models/fabricante');
    const Categoria = require('./models/categoria');
    await database.sync();

    // const novaCategoria = await Categoria.create({ nome: 'Informática '});
    const produto = await Produto.findByPk(1, {
        include: Categoria
    });

console.log(produto.categoria);

    // const novoFabricante = await Fabricante.create({
    //     nome: 'Apple'
    // })

    // const novoProduto = await Produto.create({
    //     nome: 'MacBook',
    //     preco: 10000,
    //     descricao: 'Notebook da Apple',
    //     idFabricante: novoFabricante.id
    // })
    // console.log(novoProduto);

    // const produto = await Produto.findByPk(1, { include: Fabricante });
    // console.log(produto.fabricante.nome);

    const fabricante = await Fabricante.findByPk(1, {include: Produto});
    // const produtos = await fabricante.getProdutos();
    console.log(fabricante.produtos);

    // await produto.destroy();

    // await Produto.destroy({ where: {
    //     preco: 30
    // }})

})();