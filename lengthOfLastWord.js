//Given a string s consisting of words and spaces, return the length of the last word in the string.

function lengthOfLastWord(value) {
  const splittedValue = value.split(" ").filter((item) => item !== "");

  const lastWord = splittedValue[splittedValue.length - 1];

  return lastWord.length;
}

const test1 = "Hello World";
const test2 = "   fly me   to   the moon  ";
const test3 = "luffy is still joyboy";

console.log("teste 1", lengthOfLastWord(test1));
console.log("teste 2", lengthOfLastWord(test2));
console.log("teste 3", lengthOfLastWord(test3));
