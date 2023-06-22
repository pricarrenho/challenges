/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

function climbStairs(n) {
  let prev = 0;
  let current = 1;

  for (let index = 0; index < n; index++) {
    let temp = current;
    current = current + prev;
    prev = temp;
  }

  return current;
}

const test1 = 2;
const test2 = 2;
const test3 = 7;

console.log(climbStairs(test1));
console.log(climbStairs(test2));
console.log(climbStairs(test3));
