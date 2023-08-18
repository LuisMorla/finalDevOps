const { sumar, restar } = require('./app');

test('debería sumar dos números correctamente', () => {
  expect(sumar(2, 3)).toBe(5);
  expect(sumar(-1, 1)).toBe(0);
});

test('debería restar dos números correctamente', () => {
  expect(restar(5, 2)).toBe(3);
  expect(restar(10, 5)).toBe(5);
});
