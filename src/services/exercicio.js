// 1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;

class ServicoExercicio {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }

    let soma = num1 + num2;

    return soma;
  }

  ConvertendoTemperaturas(temperatura) {
    let celcius = temperatura;
    let fahrenheit = (9 * celcius + 160) / 5;

    return fahrenheit;
  }
}

module.exports = ServicoExercicio;
