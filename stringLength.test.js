const stringLength = require('./stringLength');

test('returns: false', () => {
  expect(stringLength('The sky is blue')).toBeFalsy();
});

test('returns: true', () => {
  expect(stringLength('I code')).toBeTruthy();
});
