## Desafio 05

Considere um banco de dados simples que armazena informações sobre livros e autores. As tabelas relevantes são as seguintes:
1. Tabela "Autores":
Colunas: AutorID (Chave Primária), Nome, Nacionalidade
2. Tabela "Livros":
Colunas: LivroID (Chave Primária), Titulo, AnoPublicacao, AutorID (Chave Estrangeira referenciando Autores)
Instruções:
1. Inserção de dados: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que
existam, pelo menos, três autores e cinco livros associados a esses autores;
2. Consulta simples: realize uma consulta simples para listar todos os autores e seus livros associados;
3. Consulta com junção INNER JOIN: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;
4. Consulta com junção LEFT JOIN: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. Inclua informações dos livros, se disponíveis;
5. Consulta com filtro por nacionalidade: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;
6. Consulta agregada: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.
Observações:
utilize as chaves primárias e estrangeiras corretamente nas junções;
- documente cada consulta explicando o propósito e os resultados esperados;
considere a importância das junções para unir informações de tabelas relacionadas e entender a interconexão dos dados.


### Resposta

````sql

create database Livraria;
use Livraria;

create table Autores (
AutorID int primary key auto_increment ,
Nome varchar(50) not null,
Nacionalidade varchar(45)
);

create table Livros (
LivroID int primary key auto_increment ,
Titulo varchar(100) not null,
AnoPublicacao int,
AutorID int not null,
foreign key (AutorID) references Autores(AutorID)
);

# Iserção de dados

	# tabela Autores
	insert into Autores(Nome, Nacionalidade) values
	('Luís Vaz de Camões', 'Portugal'),
	('Machado de Assis', 'Brasil'),
	('José de Alencar', 'Brasil'),
	('Jane Austen', 'Inglaterra'),
    ('George Orwell', 'Grã-Bretanha'),
    ('Benjamin Keach', 'Inglaterra'),
    ('Monteiro Lobato', 'Brasil');

	
    # tabela Livros
	insert into Livros(Titulo, AnoPublicacao, AutorID) values
	('Os Lusíadas', 1572, 1), 
	('Memórias Póstumas de Brás Cubas', 1881, 2),
	('Quincas Borba', 1891, 2), 
	('Dom Casmurro', 1899, 2),
	('Iracema', 1884, 3),
	('O Guarani', 1857, 3), 
	('Orgulho e Preconceito', 1813, 4),
	('1984', 1949, 5), 
	('Parábolas e Metáforas da Escritura', 1689, 6);

# Consulta tabela Autores
select
AutorID as 'Autor ID',
Nome as 'Autor',
Nacionalidade as 'País'
from Autores;

# consulta tabela livros
select
LivroID as 'Livro ID',
Titulo as 'Título',
AnoPublicacao as 'Ano'
from Livros;

# Consulta junção tabelas autores e livros com Join
select
Autores.AutorID as 'Autor ID',
Autores.Nome as 'Autor',
Autores.Nacionalidade as 'País',
Livros.LivroID as 'Livro ID',
Livros.Titulo as 'Título',
Livros.AnoPublicacao as 'Ano'
from Autores
join Livros on Autores.AutorID = Livros.AutorID;

# Consulta junção tabelas autores e livros com Inner Join

select
Autores.AutorID as 'Autor ID',
Autores.Nome as 'Autor',
Autores.Nacionalidade as 'País',
Livros.LivroID as 'Livro ID',
Livros.Titulo as 'Título',
Livros.AnoPublicacao as 'Ano'
from Autores
inner join Livros on Autores.AutorID = Livros.AutorID;

# Consulta left Join 

select
Autores.AutorID as 'Autor ID',
Autores.Nome as 'Autor',
Autores.Nacionalidade as 'País',
Livros.LivroID as 'Livro ID',
Livros.Titulo as 'Título',
Livros.AnoPublicacao as 'Ano'
from Autores
left join Livros on Autores.AutorID = Livros.AutorID;

# Consulta filtro nacionalidade:

select
Autores.AutorID as 'Autor ID',
Autores.Nome as 'Autor',
Autores.Nacionalidade as 'País',
Livros.LivroID as 'Livro ID',
Livros.Titulo as 'Título',
Livros.AnoPublicacao as 'Ano'
from Autores
left join Livros on Autores.AutorID = Livros.AutorID
where Autores.Nacionalidade = 'Portugal' or
Autores.Nacionalidade = 'Inglaterra';

# Consulta agregada

select
Autores.AutorID as 'Autor ID',
Autores.Nome as 'Autor',
Autores.Nacionalidade as 'País',
count(Livros.LivroID) as 'Quantidade de livros'
from Autores
left join Livros on Autores.AutorID = Livros.AutorID
group by Autores.AutorID;

````
