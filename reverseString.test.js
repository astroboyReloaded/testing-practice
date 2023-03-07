const reverseString = require('./reverseString');

test('should return: !drah yalp ,trohs si efiL', () => {
  expect(reverseString('Life is short, play hard!')).toBe(
    '!drah yalp ,trohs si efiL'
  );
});
