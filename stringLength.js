const stringLength = (string) => {
  const strLngth = string.length;
  return strLngth > 0 && strLngth < 11;
};

module.exports = stringLength;
