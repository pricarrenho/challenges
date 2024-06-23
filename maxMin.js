function maxMin(operations, x) {
  const size = operations.length;
  let result = [];

  for (let index = 0; index < size; index++) {
    if (operations[index] === "push") {
      result.push(x[index]);
    } else {
      result = result.filter((value) => value !== x[index]);
    }
  }

  return result;
}

console.log(maxMin(["push", "push", "push", "pop"], [1, 2, 3, 1]));
