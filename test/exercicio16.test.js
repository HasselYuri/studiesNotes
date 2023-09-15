const { describe, expect, it } = require('@jest/globals')
const { sistemaCalculoDeImpostos } = require('../JavaScript/Exercicios/fazendoExercicios/exercicio16.js')
// const { calcularMedia } = require('../exercicios/nove.js')

describe('Testes do décimo-sexto exercício', () => {
   it('Deve trazer a converção', () => {
      const result = sistemaCalculoDeImpostos("01", 2, 2000)
      
      expect(result.nCpfUsu).toBe('01');
      expect(result.resultado).toBe('Alíquiota com 10%');
   });

});