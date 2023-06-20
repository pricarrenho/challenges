/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

function plusOne(digits) {
  const lastDigit = digits.length - 1;
  const lastPosition = digits[lastDigit];

  if (lastPosition !== 9) {
    digits[lastDigit]++;
    return digits;
  }

  let verifyDigit = lastDigit;

  while (true) {
    if (verifyDigit >= 0 && digits[verifyDigit] === 9) {
      digits[verifyDigit] = 0;
      verifyDigit = verifyDigit - 1;
    } else {
      if (verifyDigit < 0) {
        digits.unshift(1);
      } else {
        digits[verifyDigit]++;
      }
      break;
    }
  }

  return digits;
}

const test1 = [1, 2, 3];
const test2 = [4, 3, 2, 1];
const test3 = [0, 9, 9];
const test4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

console.log("teste 1", plusOne(test1));
console.log("teste 2", plusOne(test2));
console.log("teste 3", plusOne(test3));
console.log("teste 4", plusOne(test4));
