function romanToInteger(value) {
  const regexToValidateRomanNumber = /^[IVXLCDM]+$/;
  const normalizedValue = value.toUpperCase();

  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (typeof value !== "string") return "Coloque um número romano valido";
  if (!regexToValidateRomanNumber.test(normalizedValue))
    return "Coloque um número romano valido";

  let soma = 0;

  if (normalizedValue.length === 1) {
    return dictionary[normalizedValue];
  }

  normalizedValue.split("").reduce((prev, current, index) => {
    console.log(soma);

    if (prev === "I" && current === "V") {
      soma = soma + 4;
      return;
    } else if (prev === "I" && current === "X") {
      soma = soma + 9;
      return;
    } else if (prev === "X" && current === "L") {
      soma = soma + 40;
      return;
    } else if (prev === "X" && current === "C") {
      soma = soma + 90;
      return;
    } else if (prev === "C" && current === "D") {
      soma = soma + 400;
      return;
    } else if (prev === "C" && current === "M") {
      soma = soma + 900;
      return;
    } else if (prev === undefined) {
    } else {
      soma = soma + dictionary[prev];
    }

    if (index === normalizedValue.length - 1) {
      soma = soma + dictionary[current];
    }

    return current;
  });

  return soma;
}

const test1 = "X";
const test2 = "x";
const test3 = "IV";
const test4 = "Xxi";
const test5 = "hx";
const test6 = 6;

console.log("teste1", romanToInteger(test1));
console.log("teste2", romanToInteger(test2));
console.log("teste3", romanToInteger(test3));
console.log("teste4", romanToInteger(test4));
console.log("teste5", romanToInteger(test5));
console.log("teste6", romanToInteger(test6));
