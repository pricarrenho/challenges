// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function (fn) {
  let call = 1;

  return function (...args) {
    let value = fn(...args);

    if (call === 1) {
      call++;
      return value;
    }
  };
};

let fn = (a, b, c) => a * b * c;
let onceFn = once(fn);

const calls = [
  [5, 7, 4],
  [2, 3, 6],
  [4, 6, 8],
];

const results = calls.map((args) => onceFn(...args));

console.log(results);
