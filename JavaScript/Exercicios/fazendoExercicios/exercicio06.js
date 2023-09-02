// 6. FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;

function convertendoTempoEvento(segundo) {
  let minutos = Math.floor(segundo / 60);
  let horas = Math.floor(minutos / 60);
  let segundos = segundo;
  

  return { horas, minutos, segundos };
}

module.exports = { convertendoTempoEvento };

  