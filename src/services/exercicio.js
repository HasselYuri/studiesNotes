// 1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;


function doisNumerosReais(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar números")
    }
    
    let soma = num1 + num2;

    return soma;
}

module.exports = {doisNumerosReais};