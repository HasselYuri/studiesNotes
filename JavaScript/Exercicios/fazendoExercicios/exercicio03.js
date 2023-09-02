// . FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;

function pesoDasCincoPessoas(peso) {
    let i;
    let total;
    let pesoText;

  for (i = 1; i <= 5; i++) {
    peso = parseFloat(pesoText);
    total += peso;
  }

  let media = total / 5;

  return media;
}

module.exports = { pesoDasCincoPessoas };
