//app.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');
const ProdutoModel = require('./models/produto');
const sequelize = new Sequelize(config.development);
const Produto = ProdutoModel(sequelize, DataTypes);
async function run() {
    try {
        // Criação de um produto 
        const produtoCriado = await Produto.create({
            nome: 'Produto A',
            preco: 19.99,
            descricao: 'Descrição do Produto A'
        });
        console.log('Produto criado:', produtoCriado.toJSON());

        // Leitura de produtos
        const produtos = await Produto.findAll();
        console.log('Produtos cadastrados:', produtos.map(p => p.toJSON()));
        // Atualização de um produto
        const produtoAtualizado = await Produto.update({
            nome: 'Leite Ninõ Integral Lata 380g',
            preco: 19.98,
            descricao: 'Lata de leite em pó Niño Integral de 380g'
        },
            { where: { id: produtoCriado.id } }
        );
        console.log(
            'Produto atualizado:',
            produtoAtualizado[0] > 0 ? 'Atualizado com sucesso' : 'Produto não encontrado'
        );
        // Remoção de um produto
        const produtoRemovido = await Produto.destroy({ where: { id: produtoCriado.id } });
        console.log(
            'Produto removido: ',
            produtoRemovido > 0 ? 'Removido com sucesso' : 'Produto não encontrado'
        );
    } catch (error) {
        console.error('Erro:', error.message);
    } finally {
        // Fechar a conexão com o banco de dados ao final do script
        await Produto.sequelize.close();
    }
}
run();