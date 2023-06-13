//Given a roman numeral, convert it to an integer.

const romanToIntegerTwo = (s) => {
  const romanSimpleLetters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanComposedLetters = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let result = s;

  Object.keys(romanComposedLetters).forEach((value) => {
    result = result.replaceAll(value, `${romanComposedLetters[value]},`);
  });

  Object.keys(romanSimpleLetters).forEach((value) => {
    result = result.replaceAll(value, `${romanSimpleLetters[value]},`);
  });

  return result.split(",").reduce(
    (prev, current) => {
      return Number(prev) + Number(current);
    },
    [0]
  );
};

console.log(convertToNumber("III"));
console.log(convertToNumber("LVIII"));
console.log(convertToNumber("MCMXCIV"));
