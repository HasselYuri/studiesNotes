// 8. FUP que peça um número e imprima a tabuada deste número

function tabuadaAteDez(num) {
  
  for(i=1; i<=10; i++) {
      tabuada = num * i;
  }
  numero = num;

  return {tabuada, numero};
}

module.exports = { tabuadaAteDez};

  