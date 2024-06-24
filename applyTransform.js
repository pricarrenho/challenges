// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const filter = function (arr, fn) {
  const result = [];

  arr.forEach((element, index) => {
    const value = fn(element, index);

    result.push(value);
  });

  return result;
};

const arr = [1, 2, 3];

const fn = (num) => num + 1;

console.log(filter(arr, fn));
