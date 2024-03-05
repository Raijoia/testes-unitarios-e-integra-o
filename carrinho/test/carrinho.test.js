/* eslint-disable no-undef */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Teste do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const carrinho = new Carrinho();
    const item = new Item('Camisa', 50, 3);
    const item2 = new Item('Bermuda', 25, 3);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);
    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter propriedade total na inicialização', () => {
    const carrinho = new Carrinho();
    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    const carrinho = new Carrinho();
    expect(() => carrinho.finalizaCompra()).toThrowError(
      'Carrinho de compras vazio',
    );
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(30);
    expect(carrinho.frete).toBe(30);
  });

  it('Deve finalizar as compras', () => {
    const carrinho = new Carrinho();
    const item = new Item('Camisa', 50, 3);
    const item2 = new Item('Bermuda', 25, 3);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(30);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 225,
      frete: 30,
      total: 255,
    });
  });
});
