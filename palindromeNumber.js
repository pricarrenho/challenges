//Check if it's a palindrome. Return with a boolean

const checkIsPalindrome = (value) => {
  const reverseValue = [...value].reverse();

  return reverseValue.toString() === value.toString();
};

const test1 = [1, 2, 2, 1];
const test2 = [1, 2];
const test3 = [2, 2, 2, 2];
const test4 = [1, 1, 2, 1];

console.log("teste1", checkIsPalindrome(test1));
console.log("teste2", checkIsPalindrome(test2));
console.log("teste3", checkIsPalindrome(test3));
console.log("teste4", checkIsPalindrome(test4));
