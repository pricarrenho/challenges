/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums) {
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const hasElement = result.find((item) => item.number === element);

    if (hasElement) {
      hasElement.amount += 1;
    } else {
      result.push({ number: element, amount: 1 });
    }
  }

  result.sort((a, b) => {
    if (a.amount > b.amount) return -1;
    if (a.amount < b.amount) return +1;

    return 0;
  });

  return result[0].number;
}

const test1 = [3, 2, 3];
const test2 = [2, 2, 2, 2, 1, 2, 1, 2, 2];

console.log("teste 1", majorityElement(test1));
console.log("teste 2", majorityElement(test2));
