# Para rodar o projeto
> npm start

# Para acessar o projeto
Acesse em seu navegador:
> localhost:3000

# Endpoints disponíveis
> /book/by-title/:title
> /book/by-author/:author
> /user/by-name/:name


#Banco de dados

O Banco de dados está disponível on-line usando as infos do arquivo de conexão com banco, contudo, se houver a vontade de rodar localmente o banco de dados também seguem as informações de configuração do mesmo.

O SGBD usado foi o MySQL e seguem os comandos de criação de database e tabelas:

# Script Mysql Database
> CREATE DATABASE `lirollajr53`;

# Script Mysql TABLE ibm_books
> CREATE TABLE `lirollajr53`.`ibm_books` (`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL, `name` VARCHAR(250), `author` VARCHAR(250));

# Script Mysql TABLE ibm_users
> CREATE TABLE `lirollajr53`.`ibm_users` (`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL, `name` VARCHAR(250));

# Popular o banco de dados
Na pasta assets há 2 arquivos de população para o banco de dados, caso queira rodar localmente.