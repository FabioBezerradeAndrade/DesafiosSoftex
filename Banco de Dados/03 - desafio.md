## Desafio 03

Você é o gerente de uma loja de eletrônicos e deseja utilizar um banco de dados para rastrear o estoque de seus produtos. Para isso, você precisa executar várias ações de gerenciamento no banco de dados da loja.
Nesse caso, a tabela de banco de dados disponível é:
Produtos
Colunas: ProdutoID (Chave Primária), Nome do Produto, Preço, Quantidade em Estoque.
Crie os seguintes comandos para inserção e manipulação de dados, partindo do pressuposto de que os de criação da tabela já foram criados. Eles são:
1. inserção de produtos (INSERT): insira três novos produtos na tabela "Produtos com os seguintes dados:
- produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque;
- produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque;
- produto 3: Nome - "Fone de Ouvido", Preço - 49.99, Quantidade - 50 unidades em estoque.
2. atualização de estoque (UPDATE): atualize o estoque do "Smartphone" para 25 unidades e o preço para 849.99 na tabela "Produtos."
3. venda de produtos (DELETE): simule a venda de cinco unidades do "Tablet" e dez unidades do "Fone de Ouvido." Atualize o estoque na tabela "Produtos de acordo com as vendas.

### Resposta


````sql

# Criar banco
create database LojaEletronico;

# usar banco
use LojaEletronico;

# Criar tabela Produtos
create table Produtos (
ProdutoID int  primary key not null auto_increment,
NomeProduto varchar(50) not null,
Preco double not null default '0',
QuantidadeProduto int not null default '0'
);


# cadastrar Produtos
insert into Produtos (NomeProduto, Preco, QuantidadeProduto) 
values 
('Smartphone', 799.99, 20),
('Tablet', 349.99, 10),
('Fone de Ouvido', 49.99, 50);

# UPDATE Produtos
update Produtos 
set QuantidadeProduto = 25, Preco = 849.99
where ProdutoID = 1;

# DELETE venda de Produtos
update Produtos
set QuantidadeProduto = QuantidadeProduto - 5
where ProdutoID = 2;

update Produtos
set QuantidadeProduto = QuantidadeProduto - 10
where ProdutoID = 3;


select * from Produtos;

````
