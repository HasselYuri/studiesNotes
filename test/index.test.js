const { describe, expect, it } = require('@jest/globals')
const { doisNumerosReais } = require('../JavaScript/Exercicios/fazendoExercicios/exercicio01.js')
// const { calcularMedia } = require('../exercicios/nove.js')

describe('Testes do primeiro exercício', () => {
   it('Deve somar 2 numeros', () => {
      const result = doisNumerosReais(1, 2)
      
      expect(result).toBe(3);
   });

});