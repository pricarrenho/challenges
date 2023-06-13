// The character most used in a sentence

const findCharacterMostUsed = (value) => {
  if (typeof value !== "string" || !value.length) {
    return "Valor não é válido, coloque uma palavra ou frase";
  }

  const arrayOfWords = value.toLowerCase().replaceAll(" ", "").split("");

  let accumulator = {};

  for (let word of arrayOfWords) {
    if (accumulator[word]) {
      accumulator[word] = accumulator[word] + 1;
    } else {
      accumulator[word] = +1;
    }
  }

  const turnObjectIntoArray = Object.entries(accumulator);

  const sortByQuantity = (a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }

    if (a[1] < b[1]) {
      return 1;
    }

    return 0;
  };

  return turnObjectIntoArray.sort(sortByQuantity)[0];
};

const test1 = 5;
const test2 = "";
const test3 = "Fear of a name only increases fear of the thing itself";
const test4 = "Priscilla";

console.log(findCharacterMostUsed(test1));
console.log(findCharacterMostUsed(test2));
console.log(findCharacterMostUsed(test3));
console.log(findCharacterMostUsed(test4));
