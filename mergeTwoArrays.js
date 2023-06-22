/*
Given two arrays of numbers, merge them leaving the numbers in ascending order
*/

function mergeTwoArrays(list1, list2) {
  const list3 = list1.concat(list2);

  return list3.sort((a, b) => {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
  });
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const list3 = [];
const list4 = [];

const list5 = [];
const list6 = [0];

console.log(mergeTwoArrays(list1, list2));
console.log(mergeTwoArrays(list3, list4));
console.log(mergeTwoArrays(list5, list6));
