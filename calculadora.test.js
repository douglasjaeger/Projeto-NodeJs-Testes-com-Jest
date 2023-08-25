const sum = require ('./calculadora');

test('Teste soma 4 + 2 to = 6', () => {
    expect(sum(4, 2)).toBe(6);
  });
