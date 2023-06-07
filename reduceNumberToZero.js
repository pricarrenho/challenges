/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

function reduceNumberToZero(value) {
  if (typeof value !== "number") return "Coloque um número";
  if (!Number.isInteger(value)) return "Coloque um número inteiro";

  let numberSteps = 0;

  while (value !== 0) {
    if (value % 2) value = value - 1;
    else value = value / 2;

    numberSteps = numberSteps + 1;
  }

  return {
    value,
    numberSteps,
  };
}

const test1 = 2;
const test2 = 13;
const test3 = 14.8;
const test4 = "Hello Word";

console.log("teste1", reduceNumberToZero(test1));
console.log("teste2", reduceNumberToZero(test2));
console.log("teste3", reduceNumberToZero(test3));
console.log("teste4", reduceNumberToZero(test4));
