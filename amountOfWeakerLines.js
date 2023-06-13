/*
You are given a matrix mat of 1's (representing soldiers) and 0's (representing civilians). 

A row i is weaker than a row j if one of the following is true:
The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.

Return the indices of the amount weakest rows in the matrix ordered from weakest to strongest.
*/

function amountOfWeakerLines(value, amount) {
  const valueInEachLine = value.map((item) =>
    item.reduce((prev, current) => prev + current)
  );

  const valueAndIndex = valueInEachLine.map((item, index) => {
    return { value: item, index: index };
  });

  const sortedByWeakest = valueAndIndex.sort((a, b) => {
    if (a.value > b.value) return +1;
    if (a.value < b.value) return -1;
    return 0;
  });

  return sortedByWeakest.slice(0, amount).map((item) => item.index);
}

const test1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const test2 = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

console.log("teste 1", amountOfWeakerLines(test1, 3));
console.log("teste 2", amountOfWeakerLines(test2, 2));
