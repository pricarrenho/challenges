function searchInsert(numbers, target) {
  const indexTarget = numbers.indexOf(target);

  if (indexTarget >= 0) {
    return indexTarget;
  } else {
    numbers.push(target);
    const sortNumbers = numbers.sort((a, b) => a - b);
    return sortNumbers.indexOf(target);
  }
}

const test1 = [1, 3, 5, 6];
const test2 = [1, 3, 5, 6];
const test3 = [1, 3, 5, 6];

// console.log("teste 1", searchInsert(test1, 5));
console.log("teste 2", searchInsert(test2, 2));
console.log("teste 3", searchInsert(test3, 7));
