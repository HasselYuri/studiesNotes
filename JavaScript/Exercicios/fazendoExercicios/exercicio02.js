// 2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. 
// Imprima o valor que o trabalhador deverá receber ao final do mês.;


function valorHoraTrabalhador(vlrHrTrabalhada, totalHrTrabalhada) {
    let vlrTotalParaReceber = (totalHrTrabalhada * vlrHrTrabalhada);

    return vlrTotalParaReceber;
}

module.exports = {valorHoraTrabalhador};