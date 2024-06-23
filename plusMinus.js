function plusMinus(arr) {
  const arrayLength = arr.length;

  let positiveNumber = 0;
  let negativeNumber = 0;
  let neutralNumber = 0;

  for (let index = 0; index < arrayLength; index++) {
    if (arr[index] > 0) {
      positiveNumber += 1;
    }

    if (arr[index] < 0) {
      negativeNumber += 1;
    }

    if (arr[index] === 0) {
      neutralNumber += 1;
    }
  }

  const getPercent = (value) => {
    return (value / arrayLength).toFixed(5);
  };

  console.log(getPercent(positiveNumber));
  console.log(getPercent(negativeNumber));
  console.log(getPercent(neutralNumber));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
