const capitalize = require('./capitalize');

test('return: Mexico', () => {
  expect(capitalize('mexico')).toBe('Mexico');
});
