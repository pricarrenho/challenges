/*
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

function isHappy(n) {
  const library = {
    0: 0 ** 2,
    1: 1 ** 2,
    2: 2 ** 2,
    3: 3 ** 2,
    4: 4 ** 2,
    5: 5 ** 2,
    6: 6 ** 2,
    7: 7 ** 2,
    8: 8 ** 2,
    9: 9 ** 2,
  };

  let accumulator = [];

  while (true) {
    const splittedValue = n.toString().split("");
    const valueSquared = splittedValue.map((value) => library[Number(value)]);
    const sum = valueSquared.reduce((prev, current) => prev + current);

    n = sum;

    accumulator = [...accumulator, sum];

    const hasDuplicate = accumulator.some(
      (item) => accumulator.indexOf(item) !== accumulator.lastIndexOf(item)
    );

    if (sum === 1) return true;

    if (hasDuplicate) return false;
  }
}

const test1 = 19;
const test2 = 2;

console.log("teste 1", isHappy(test1));
console.log("teste 2", isHappy(test2));
