/*
You are given an  integer grid accounts where accounts is the amount of money the customer has in the​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

function sumArrayValues(value) {
  return value.map((values) => {
    return values.reduce((current, prev) => {
      return current + prev;
    });
  });
}

function maximumWealth(accounts) {
  const totalWealthOfAccounts = sumArrayValues(accounts);

  return totalWealthOfAccounts.reduce((current, prev) => {
    if (current > prev) return current;

    return prev;
  });
}

const test1 = [
  [1, 2, 3],
  [3, 5, 1],
];

const test2 = [
  [4, 9, 3],
  [3, 5, 1],
];

console.log(maximumWealth(test1));
console.log(maximumWealth(test2));
