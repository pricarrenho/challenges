/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// function containsDuplicate(nums) {
//   // const filteredDuplicateNumbers = nums.filter(
//   //   (item, index) => nums.indexOf(item) !== index
//   // );
//   // if (filteredDuplicateNumbers.length !== 0) return true;
//   // for (let index = 0; index < nums.length; index++) {
//   //   if (nums.indexOf(nums[index]) !== index) {
//   //     return true;
//   //   }
//   // }
//   // return false;

// }

function containsDuplicate(nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums.indexOf(nums[index]) !== index) {
      return true;
    }
  }
  return false;
}

const test1 = [1, 2, 3, 1];
const test2 = [1, 2, 3, 4];
const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log("teste 1", containsDuplicate(test1));
console.log("teste 2", containsDuplicate(test2));
console.log("teste 3", containsDuplicate(test3));
