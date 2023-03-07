const stringLength = require('./stringLength');

test('returns: 16', () => {
  expect(stringLength('The sky is blue')).toBe(15);
});
