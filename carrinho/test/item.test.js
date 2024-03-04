/* eslint-disable no-undef */
import Item from '../item';

describe('Teste dos itens', () => {
  it('Deve ter 3 campos: nome, valor, quantidade', () => {
    const item = new Item('Camisa', 50, 3);
    expect(item.nome).toBe('Camisa');
    expect(item.valor).toBe(50);
    expect(item.quantidade).toBe(3);
  });

  it('Deve retornar o valor total do item', () => {
    const item = new Item('Camisa', 50, 3);
    expect(item.pegaValorTotalItem()).toBe(150);
  });
});
