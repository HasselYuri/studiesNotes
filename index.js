const express = require('express');

//Aqui em baixo, vai as funções.
//Seguind oo mesmo padrão : const {nome_da_funcao} = require('./caminho/que/esta.js');

//Como começar a funciont : 
//function nome_da_funcion(parametros,) {
//     logica
// }

//let - consegue alterar variavel
//const - não consegue alterar variavel

const {doisNumerosReais} = require('./JavaScript/Exercicios/fazendoExercicios/exercicio01.js');

const app = express();
const porta = 3000;

app.use(express.json());

app.post('/api/exercicio01', (req,res) => {
    const soma = doisNumerosReais(req.body.num1, req.body.num2);

    res.status(200).json({
        message:(`A soma dos 2 números reais equivale a: ${soma}.`)
    });
});







app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`);

});