// 10. FUP que calcule o IMC -solicite se é H ou M e faça o calculo;

function sistemaDeIMC(genero, peso, altura) {

  let calculoMediaIMC = peso / (altura*altura);

  if(genero === "M") {
    if(calculoMediaIMC < 20) {
      resultado = "abaixo do peso.";
    } else if( calculoMediaIMC >= 20 && calculoMediaIMC < 24.9) {
      resultado = "normal.";
    } else if( calculoMediaIMC >= 25 && calculoMediaIMC < 29.9) {
      resultado = "obesidade leve.";
    } else if( calculoMediaIMC >= 30 && calculoMediaIMC < 39.9) {
      resultado = "obesidade moderada.";
    } else if( calculoMediaIMC >= 40) {
      resultado = "obesidade mórbida.";
    }
  }

  if(genero === "F") {
    if(calculoMediaIMC < 19) {
      resultado = "abaixo do peso.";
    } else if( calculoMediaIMC >= 19 && calculoMediaIMC < 23.9) {
      resultado = "normal.";
    } else if( calculoMediaIMC >= 24 && calculoMediaIMC < 28.9) {
      resultado = "obesidade leve.";
    } else if( calculoMediaIMC >= 29 && calculoMediaIMC < 38.9) {
      resultado = "obesidade moderada.";
    } else if( calculoMediaIMC >= 39) {
      resultado = "obesidade mórbida.";
    }
  }
  return resultado;
}

module.exports = { sistemaDeIMC};

  