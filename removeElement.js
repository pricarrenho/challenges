function removeElement(nums, val) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      nums[index] = undefined;
    }
  }

  nums.sort();

  return nums.filter((value) => value === 0 || !!value).length;
}

const test1 = [3, 2, 2, 3];
const test2 = [0, 1, 2, 2, 3, 0, 4, 2];

console.log("teste 1", removeElement(test1, 3));
console.log("teste 2", removeElement(test2, 2));

// const withoutValue = numbers.map((item) =>
//   item === value ? value : undefined
// );

// const matchAmount = numbers.filter((item) => item !== value);

// numbers = matchAmount;
// return matchAmount.length;
