// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let result = init;

  return {
    increment: () => {
      result++;
      return result;
    },
    reset: () => {
      result = init;
      return init;
    },
    decrement: () => {
      result--;
      return result;
    },
  };
};

const counter = createCounter(5);
const calls = ["increment", "reset", "decrement"];
const results = calls.map((call) => counter[call]());

console.log(results);
