/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

function merge(nums1, m, nums2, n) {
  nums2.splice(n, nums2.length - n);
  nums1.splice(m, nums1.length - m);
  nums1.splice(m, n, ...nums2);

  return nums1.sort((a, b) => a - b);
}

const test1 = [1, 2, 3, 0, 0, 0];
const test2 = [2, 5, 6, 8, 9, 4];

const test3 = [1];
const test4 = [];

console.log("teste 1", merge(test1, 3, test2, 3));
console.log("teste 2", merge(test1, 1, test2, 0));
