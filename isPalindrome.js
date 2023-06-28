function isPalindrome(value) {
  const specialCharRegex = /[^a-zA-Z0-9]/g;

  const reverseValue = value
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replaceAll(specialCharRegex, "")
    .replaceAll(" ", "");

  const normalizedValue = value
    .toLowerCase()
    .replaceAll(specialCharRegex, "")
    .replaceAll(" ", "");

  return normalizedValue === reverseValue;
}

const test1 = "A man, a plan, a canal: Panama";
const test2 = "race a car";
const test3 = 'Marge, let\'s "[went]." I await {news} telegram.';

console.log("teste 1", isPalindrome(test1));
console.log("teste 2", isPalindrome(test2));
console.log("teste 3", isPalindrome(test3));
