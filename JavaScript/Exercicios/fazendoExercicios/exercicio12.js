// 12. FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo;

function sistemaLeitorPositivoOuNegativo(num) {

  if(num > 0) {
    resultado = "positivo";
  } else if( num < 0) {
    resultado = "negativo";
  }

  return resultado;
  
}

module.exports = { sistemaLeitorPositivoOuNegativo};

  