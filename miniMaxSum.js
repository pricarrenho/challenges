function miniMaxSum(arr) {
  const qtdItens = arr.length - 1;

  arr.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;

  for (let index = 0; index < qtdItens; index++) {
    minSum += arr[index];
  }

  for (let index = qtdItens; index > 0; index--) {
    maxSum += arr[index];
  }

  console.log(minSum, maxSum);
}

console.log(miniMaxSum([1, 4, 3, 2, 5]));
