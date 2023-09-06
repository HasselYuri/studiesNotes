// 16. FUP que calcule o imposto de renda de um contribuinte. Os dados de entrada são: o CPF(int), o número de dependentes e a renda mensal. Para cada dependente será feito um desconto de 5% do salário mínimo por dependente. Os valores da alíquota para cálculo do imposto são:

// | Renda Mensal              | Alíquota |
// | ------------------------- | -------- |
// | Até 2 salários mínimos    | Isento   |
// | 2 < salários mínimos <= 3 | 5%       |
// | 3 < salários mínimos <= 5 | 10%      |
// | 5 < salários mínimos <= 7 | 15%      |
// | Salários mínimos > 7      | 20%      |

function sistemaCalculoDeImpostos(nCpfUsu, numDepUsu, rendaMensUsu) {
  salarioMin = 1320;
  descontoPerDep = numDepUsu*0.95;

  aliquota = rendaMensUsu+(rendaMensUsu*descontoPerDep);

  if(aliquota < 2*salarioMin) {
    resultado = "Alíquota isenta";
  } else if( aliquota > 2*salarioMin && aliquota <= 3*salarioMin){
    resultado = "Alíquota com 5%";
  } else if( aliquota > 3*salarioMin && aliquota <= 5*salarioMin){
    resultado = "Alíquiota com 10%";
  } else if( aliquota > 5*salarioMin && aliquota <= 7*salarioMin){
    resultado = "Alíquiota com 15%";
  } else if( aliquota > 7*salarioMin){
    resultado = "Alíquiota com 20%";
  }

  return {resultado, nCpfUsu};

}

module.exports = { sistemaCalculoDeImpostos};

  