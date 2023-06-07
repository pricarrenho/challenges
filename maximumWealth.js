//Richest Customer Wealth

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

  // return totalWealthOfAccounts.reduce((current, prev) =>
  //   current > prev ? current : prev
  // );
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
