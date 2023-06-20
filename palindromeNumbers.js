const checkIsPalindrome = (value) => {
  const arrayValue = value.toString().split("").reverse().join("");

  return value.toString() === arrayValue;
};

const test1 = 121;
const test2 = -121;
const test3 = 10;

console.log("teste1", checkIsPalindrome(test1));
console.log("teste2", checkIsPalindrome(test2));
console.log("teste3", checkIsPalindrome(test3));
