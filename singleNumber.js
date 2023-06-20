function singleNumber(nums) {
  let helper = [];

  for (let index = 0; index < nums.length; index++) {
    if (helper.includes(nums[index])) {
      helper = helper.filter((item) => item !== nums[index]);
    } else {
      helper.push(nums[index]);
    }
  }

  return helper[0];
}

const test1 = [2, 2, 1];
const test2 = [4, 1, 2, 1, 2];
const test3 = [
  -80, 48, 777, 423, -435, 349, -988, -379, -197, 192, 13, -496, -787, 94, 329,
  -490, -230, -929, 457, 591, 75, -80, 48, 777, 423, -435, 349, -988, -379,
  -197, 192, 13, -496, -787, 94, 329, -490, -230, -929, 457, 591, 75, -477,
];

console.log("teste 1", singleNumber(test1));
console.log("teste 2", singleNumber(test2));
console.log("teste 3", singleNumber(test3));
