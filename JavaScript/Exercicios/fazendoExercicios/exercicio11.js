// 11. FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado;

function sistemaSimplesCalculadora(operacao, num1, num2) {

  if(operacao === "-") {
    resultado = num1 - num2;
  }
  
  if(operacao === "+") {
    resultado = num1 + num2;
  }
  
  if(operacao === "*") {
    resultado = num1 * num2;
  }
  
  if(operacao === "/") {
    resultado = num1 - num2;
  }

  return resultado;
  
}

module.exports = { sistemaSimplesCalculadora};

  