// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
//If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

Array.prototype.last = function () {
  const isValidArray = this.length > 0;

  if (isValidArray) {
    const lastPosition = this.length - 1;

    return this[lastPosition];
  }

  return -1;
};

const a = [1, 2, 3];

console.log(a.last());
