const checkIsPalindrome = (value) => {
  if (typeof value !== "string") return false;

  const reverseWord = value
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("-", "");
  const normalizedValue = value
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("-", "");

  return reverseWord === normalizedValue;
};

const test1 = "Rafael";
const test2 = "Priscilla";
const test3 = "ovo";
const test4 = "radar";
const test5 = "Socorram-me subi no onibus em marrocos";

console.log("teste1", checkIsPalindrome(test1));
console.log("teste2", checkIsPalindrome(test2));
console.log("teste3", checkIsPalindrome(test3));
console.log("teste4", checkIsPalindrome(test4));
console.log("teste5", checkIsPalindrome(test5));
