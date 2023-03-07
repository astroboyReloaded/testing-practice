const calc = require('./calc');

describe('Sum', () => {
  test('1 + 2 = 3', () => {
    expect(calc.sum(1, 2)).toBe(3);
  });

  test('3 + 6 = 9', () => {
    expect(calc.sum(3, 6)).toBe(9);
  });

  test('9 + 9 + 9 = 27', () => {
    expect(calc.sum(9, 9, 9)).toBe(27);
  });
});

describe('sub', () => {
  test('6 - 3 = 3', () => {
    expect(calc.sub(6, 3)).toBe(3);
  });

  test('3 - 6 = -3', () => {
    expect(calc.sub(3, 6)).toBe(-3);
  });

  test('-18 - 9 - 3 = 30', () => {
    expect(calc.sub(-18, 9, 3)).toBe(-30);
  });

  describe('mult', () => {
    test('6 * 3 = 18', () => {
      expect(calc.mult(6, 3)).toBe(18);
    });

    test('3 * 6 * 9 = 171', () => {
      expect(calc.mult(3, 6, 9)).toBe(162);
    });

    test('-12 * -15 = 180', () => {
      expect(calc.mult(-12, -15)).toBe(180);
    });
  });

  describe('div', () => {
    test('27 / 9 = 3', () => {
      expect(calc.div(27, 9)).toBe(3);
    });

    test('72 / 6 = 12', () => {
      expect(calc.div(72, 6)).toBe(12);
    });

    test('243 / 30 = 8.1', () => {
      expect(calc.div(243, 30)).toBe(8.1);
    });
  });
});
