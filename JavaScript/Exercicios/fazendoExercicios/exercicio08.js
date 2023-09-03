// 8. FUP que peça um número e imprima a tabuada deste número

function tabuadaAteDez(num) {

  const tabuada = []; //Criei o array que vai armazenar os itens da tabuada.

  //For que vai criar na hora a conta e apresentar em tela
  for(let index =1; index < 11; index++) {
    tabuada.push(num*index);
  }
  return {tabuada, num};
}

module.exports = { tabuadaAteDez};

  