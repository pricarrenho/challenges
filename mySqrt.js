/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
*/

function mySqrt(x) {
  const squareRoot = Math.sqrt(x);

  return Math.floor(squareRoot);
}

const test1 = 4;
const test2 = 8;

console.log("teste 1", mySqrt(test1));
console.log("teste 2", mySqrt(test2));
