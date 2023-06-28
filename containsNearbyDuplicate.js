/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      const seiLa = map.get(nums[index]);

      if (index - seiLa <= k) {
        return true;
      }
    }

    map.set(nums[index], index);
  }

  return false;
}

const test1 = [1, 2, 3, 1];

const test2 = [1, 0, 1, 1];

const test3 = [1, 2, 3, 1, 2, 3];

console.log("teste 1", containsNearbyDuplicate(test1, 3));
console.log("teste 2", containsNearbyDuplicate(test2, 1));
console.log("teste 3", containsNearbyDuplicate(test3, 2));
