/*
Given an array, return the middle node of the array.

If there are two middle nodes, return the second middle node.
*/

function middleOfTheArray(value) {
  const lengthOfValue = value.length;
  const average = Math.floor(lengthOfValue / 2);

  return value.slice(average);
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [1, 2, 3, 4, 5, 6];

console.log("teste 1", middleOfTheArray(test1));
console.log("teste 2", middleOfTheArray(test2));
