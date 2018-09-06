var disemvowel = function(str) {
  if (typeof str != "string") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;
