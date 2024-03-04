/* eslint-disable no-undef */
import { somaHorasExtras, calculaDesconto } from '../index';

describe('Testes para a folha de pagamento', () => {
  it('Deve retornar o salário com as horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o salário com os descontos', () => {
    const esperado = 1800;
    const retornado = calculaDesconto(2000, 200);

    expect(retornado).toBe(esperado);
  });
});
