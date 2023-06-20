/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(value) {
  const smallestWord = value.reduce((prev, current) => {
    if (prev.length <= current.length) return prev;
    return current;
  });

  let result = "";

  for (let index = 0; index < smallestWord.length; index++) {
    const element = smallestWord[index];

    const isMatched = value.every((item) => item[index] === element);

    if (isMatched) {
      result += element;
    } else {
      break;
    }
  }

  return result;
}

const test1 = ["flower", "flow", "flight"];
const test2 = ["dog", "racecar", "car"];
const test3 = ["cir", "car"];

console.log("teste 1", longestCommonPrefix(test1));
console.log("teste 2", longestCommonPrefix(test2));
console.log("teste 3", longestCommonPrefix(test3));
