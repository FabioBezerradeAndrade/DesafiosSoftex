## Desafio 02

Você é um desenvolvedor de banco de dados encarregado de criar um banco de dados para um blog on- line. Ele deve conter informações sobre posts, autores e comentários. Cada post é escrito por um autor e pode ter vários comentários.
Tarefas:
1. Crie um banco de dados chamado "BlogDB.";
2. Crie as tabelas a seguir:
a) "Post" - Colunas: PostID (Chave Primária), Título, Conteúdo, Data de Publicação, AutorID (Chave Estrangeira para a tabela Autor).
b) "Autor" - Colunas: AutorID (Chave Primária), Nome do Autor, E-mail.
c) "Comentario" - Colunas: ComentariolD (Chave Primária), Texto do Comentário, Data do Comentário, AutorlD (Chave Estrangeira para a tabela Autor), PostID (Chave Estrangeira para a tabela Post).
3. Defina a integridade referencial entre as tabelas, de acordo com as relações descritas (um post é escrito por um autor, um autor pode escrever vários posts, um post pode ter vários comentários, um comentário é escrito por um autor).

### Resposta

`````sql

# Criar Banco

create database BlogDB;

#Chamar Banco para uso

use BlogDB;

# Criar tabela Autor 
create table Autor (
AutorID INT PRIMARY KEY auto_increment,
NomeAutor varchar(50) not null,
email varchar(25)
);

# Criar tabela Post
create table Post (
PostID int primary key auto_increment,
Titulo varchar(50) not null,
Conteudo varchar(255) not null,
DataPublicacao date not null,
AutorID int not null,
foreign key(AutorID) references Autor(AutorID),
constraint fk_post_has_a_autor foreign key (AutorID) references Autor(AutorID)
);

# Criar tabela Comentario
create table Comentario (
ComentarioID int primary key auto_increment,
TestoComentario varchar(255) not null,
DataComentario date not null,
AutorID int not null,
PostID int not null,
foreign key(AutorID) references Autor(AutorID),
foreign key(PostID) references Post(PostID),
constraint fk_autor_write_many_post foreign key (AutorID) references Autor(AutorID),
constraint fk_post_has_many_comentarios foreign key (PostID) references Post(PostID)
);

