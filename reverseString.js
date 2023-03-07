const reverseString = (string) => {
  const rvrsdStr = string.split('').reverse().join('');
  return rvrsdStr;
};

module.exports = reverseString;
