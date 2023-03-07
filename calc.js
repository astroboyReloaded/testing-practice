const calc = {
  sum: (...nums) => nums.reduce((a, b) => a + b),
  sub: (...nums) => nums.reduce((a, b) => a - b),
  mult: (...nums) => nums.reduce((a, b) => a * b),
  div: (...nums) => nums.reduce((a, b) => a / b),
};

module.exports = calc;
