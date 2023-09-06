// 15. FUP que leia 3 valores a,b,c e verifique se eles formam ou não um triângulo. 
// Caso os valores formem um triângulo, solicite a base e a altura, calcule (base * altura / 2).
// escreva a área deste triângulo. 
// Se não formam triângulo escreva os valores lidos. 

function sistemaLeitorDeTriangulo(l1,l2,l3) {

  if(l1 == l2 && l1 == l3){
    base = l1;
    altura = (l2 * Math.sqrt(3)) / 2;
    area = (base*altura)/2;

    resultado = `A área equivale a : ${area}.`;
  } else {
    resultado = `Lado1 : ${l1}, Lado2 : ${l2}, Lado3 : ${l3}.`;
  }

  return resultado;
  
}

module.exports = { sistemaLeitorDeTriangulo};

  