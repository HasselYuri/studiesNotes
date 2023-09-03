// 9. FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de :
// "Aprovado", caso a média seja igual ou superior a 7, 
// "Recuperação", caso a média se igual ou superior a 5 e inferior a 7,
// “Reprovado”, caso a média seja inferior a 5.


function sistemaDeBoletimEscolar(nota1, nota2, nota3) {

  let mediaNotas = (nota1 + nota2 + nota3) / 3;

  if(mediaNotas >= 7) {
    resultado = "Aprovado";
      return resultado;
  } else if (mediaNotas < 7 && mediaNotas > 5 ) {
    resultado = "Recuperação";
      return resultado;
  } else {
    resultado = "Reprovado";
      return resultado;
  }
  
}

module.exports = { sistemaDeBoletimEscolar};

  