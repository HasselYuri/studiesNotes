const { describe, expect, it } = require('@jest/globals')
const { convertendoTemperaturas } = require('../JavaScript/Exercicios/fazendoExercicios/exercicio04.js')
// const { calcularMedia } = require('../exercicios/nove.js')

describe('Testes do quarto exercício', () => {
   it('Deve trazer a converção', () => {
      const result = convertendoTemperaturas(2)
      
      expect(result).toBe(35.6);
   });

});