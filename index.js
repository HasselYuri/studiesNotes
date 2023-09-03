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
const {
  convertendoTemperaturas,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio04.js");

const {
  convertendoDistancias,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio05.js");

const {
  convertendoTempoEvento,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio06.js");

const {
  convertendoQuilometrosEmDerivados,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio07.js");

const {
  tabuadaAteDez,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio08.js");

const {
  sistemaDeBoletimEscolar,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio09.js");

const {
  sistemaDeIMC,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio10.js");

const {
  sistemaSimplesCalculadora,
} = require("./JavaScript/Exercicios/fazendoExercicios/exercicio11.js");



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

//Inicio Exercicio 4

app.post("/api/exercicio04", (req, res) => {
  const termometro = convertendoTemperaturas(req.body.temperatura);

  res.status(200).json({
    message: `A temperatura convertida em F equivale a: ${termometro}.`,
  });
});

//Fim Exercicio 4

//Inicio Exercicio 5

app.post("/api/exercicio05", (req, res) => {
  const medidometro = convertendoDistancias(req.body.distancia);

  res.status(200).json({
    message: `A distancia convertida em quilometros equivale a: ${medidometro}.`,
  });
});

//Fim Exercicio 5

//Inicio Exercicio 6

app.post("/api/exercicio06", (req, res) => {
  
  const segundosDoEvento = req.body.segundo;
  const resultado = convertendoTempoEvento(segundosDoEvento);

  res.status(200).json({
    message: `O evento terá: ${resultado.horas} horas, ${resultado.minutos} minutos e ${resultado.segundos} segundos.`,
  });
});

//Fim Exercicio 6

//Inicio Exercicio 7

app.post("/api/exercicio07", (req, res) => {
  
  const distanciaExemplo = req.body.km;
  const resultado = convertendoQuilometrosEmDerivados(distanciaExemplo);

  res.status(200).json({
    message: `A distancia equivale a: ${resultado.quilometros} quilometros, ${resultado.metros} metros e ${resultado.centimentros} centimetros.`,
  });
});

//Fim Exercicio 7

//Inicio Exercicio 8

app.post("/api/exercicio08", (req, res) => {
  
  const tabuadaExemplo = req.body.num;
  const resultado = tabuadaAteDez(tabuadaExemplo);

  res.status(200).json({
    message: `A tabuada do ${resultado.num} até sua 10° multiplicação equivale, na ordem crescente, a: ${resultado.tabuada}`,
  });
});

//Fim Exercicio 8

//Inicio Exercicio 9

app.post("/api/exercicio09", (req, res) => {
  const {nota1, nota2, nota3} = req.body;
  const boletim = sistemaDeBoletimEscolar(nota1, nota2, nota3);

  res.status(200).json({
    message: `O status do aluno nessa matéria é de: ${boletim}.`,
  });
});

//Fim Exercicio 9

//Inicio Exercicio 10

app.post("/api/exercicio10", (req, res) => {
  const {genero, peso, altura} = req.body;
  const resultado = sistemaDeIMC(genero, peso, altura);

  res.status(200).json({
    message: `O status do IMC tem equivalencia a: ${resultado}`,
  });
});

//Fim Exercicio 10

//Inicio Exercicio 11

app.post("/api/exercicio11", (req, res) => {
  const {operacao, num1, num2} = req.body;
  const resultado = sistemaSimplesCalculadora(operacao, num1, num2);

  res.status(200).json({
    message: `O resulado da operação: ${resultado}`,
  });
});

//Fim Exercicio 11



app.listen(porta, () => {
  console.log(`O servidor está rodando na porta ${porta}`);
});