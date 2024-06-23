// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

//  1 - Verificar caso array é valido
//  2 - Caso array não seja valido retornar init
//  3 - Caso array valido criar result vazio
//  4 - Iterar array

let reduce = function (nums, fn, init) {
  let result = init;

  const isValidArray = nums.length > 0;

  if (!isValidArray) return result;

  for (let index = 0; index < nums.length; index++) {
    result = fn(result, nums[index]);
  }

  return result;
};

const nums = [1, 2, 3, 4];

const fn = function sum(accum, curr) {
  return accum + curr;
};

const init = 0;

console.log(reduce(nums, fn, init));
