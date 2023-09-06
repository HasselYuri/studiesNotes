// 14. FUP que solicite dois numero e verifique qual é o maior;

function sistemaLeitorNumeroMaior(num1, num2) {

  if(num1 > num2) {
    resultado = `${num1} é maior que o ${num2}`;
  } else if(num1 < num2) {
    resultado = `${num1} é menor que o ${num2}`;
  }

  return resultado;
  
}

module.exports = { sistemaLeitorNumeroMaior};

  