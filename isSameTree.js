function isSameTree(p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
}

const test1 = [1, 2, 3];
const test2 = [1, 2, 3];

const test3 = [1, 2];
const test4 = [1, null, 2];

console.log(isSameTree(test1, test2));
console.log(isSameTree(test3, test4));
