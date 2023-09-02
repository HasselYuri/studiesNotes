// 7. FUP que leia um valor em quilometros e converta para metros e centimetro;

function convertendoQuilometrosEmDerivados(km) {
  let centimentros = Math.floor(km*10000);
  let metros = Math.floor(km*1000);
  let quilometros = km;
  

  return { quilometros, metros, centimentros };
}

module.exports = { convertendoQuilometrosEmDerivados };

  