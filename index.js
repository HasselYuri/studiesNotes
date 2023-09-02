const express = require("express");

//Aqui em baixo, vai as funções.
//Seguind oo mesmo padrão : const {nome_da_funcao} = require('./caminho/que/esta.js');

//Como começar a funciont :
//function nome_da_funcion(parametros,) {
//     logica
// }

//let - consegue alterar variavel
//const - não consegue alterar variavel

const {
  doisNumerosReais,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio01.js");
const {
  valorHoraTrabalhador,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio02.js");
const {
  pesoDasCincoPessoas,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio03.js");

const app = express();
const porta = 3000;

app.use(express.json());

// Inicio Exercicio 1

app.post("/api/exercicio01", (req, res) => {
  const soma = doisNumerosReais(req.body.num1, req.body.num2);

  res.status(200).json({
    message: `A soma dos 2 números reais equivale a: ${soma}.`,
  });
});

//Fim Exercicio 1

//inicio Exercicio 2

app.post("/api/exercicio02", (req, res) => {
  const vlrTotal = valorHoraTrabalhador(
    req.body.totalHrTrabalhada,
    req.body.vlrHrTrabalhada
  );

  res.status(200).json({
    message: `O valor total que o funcionario deve receber equivale a: R$${vlrTotal},00.`,
  });
});

// Fim Exercicio 2

// Inicio Exercicio 3

app.post("/api/exercicio03", (req, res) => {
  const media = pesoDasCincoPessoas(req.body.peso);

  res.status(200).json({
    message: `A média do peso das 5 pessoas equivale a ${media}.`,
  });
});

// Fim Exercicio 3


app.listen(porta, () => {
  console.log(`O servidor está rodando na porta ${porta}`);});