/*
Given an array of integers numbers and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(numbers, target) {
  for (let first = 0; first < numbers.length; first++) {
    for (let second = first + 1; second < numbers.length; second++) {
      if (numbers[first] + numbers[second] === target) {
        return [first, second];
      }
    }
  }
}

const test1 = [2, 7, 11, 15];
const test2 = [2, 5, 5, 11];
const test3 = [3, 3];

console.log("teste 1", twoSum(test1, 9));
console.log("teste 2", twoSum(test2, 10));
console.log("teste 3", twoSum(test3, 6));
