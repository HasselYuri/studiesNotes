const { Sequelize } = require('sequelize');
const { development } = require('./config');

const sequelize = new Sequelize(development)

//criando

// CREATE DATABASE exemplo;

// CREATE TABLE pessoas (

//  id INT AUTO_INCREMENT PRIMARY KEY,

//  nome VARCHAR(255) NOT NULL,

//  email VARCHAR(255) NOT NULL UNIQUE,

//  senha VARCHAR(255)

// );

// INSERT INTO pessoas (nome, email, senha)

//  VALUES ('João da Silva', 'joao@example.com', 'senha123');



sequelize.sync()
    .then(() => {
        console.log('Conexao com o banco estabelida.');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco:', error);
    });


module.exports = sequelize    