//Return the longest word

const findLargestWord = (value) => {
  if (typeof value !== "string")
    throw new Error("Parâmetro inválido, favor passar uma frase");

  return value.split(" ").reduce((prev, current) => {
    if (prev.length >= current.length) return prev;
    return current;
  });
};

const test1 = "There is some good in this world";
const test2 = "Whatever our souls are made of, his and mine are the same";

// console.log("teste0", findLargestWord({}));
console.log("teste1", findLargestWord(test1));
console.log("teste2", findLargestWord(test2));
