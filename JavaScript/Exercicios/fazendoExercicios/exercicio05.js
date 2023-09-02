// 5. FUP que solicite a quantidade de milhas e converta para quilometros 
// Formula : (1milha = 1.60934kms);

function convertendoDistancias(distancia) {
  let milhas = distancia;  
  let quilometros = (milhas * 1.60934);

  return quilometros; 
} 

module.exports = {convertendoDistancias};
