const { describe, expect, it } = require('@jest/globals')
const { tabuadaAteDez } = require('../JavaScript/Exercicios/fazendoExercicios/exercicio08.js')
// const { calcularMedia } = require('../exercicios/nove.js')

describe('Testes do oitavo exercício', () => {
   it('Deve trazer a converção', () => {
      const result = tabuadaAteDez(2)
      
      expect(result.tabuada).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
   });

});