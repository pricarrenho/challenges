/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function maxProfit(prices) {
  let result = 0;

  prices.reduce((prev, current) => {
    if (prev < current) {
      const dif = current - prev;

      if (result < dif) {
        result = dif;
      }

      return prev;
    }

    return current;
  });

  return result;
}

const test1 = [7, 1, 5, 3, 6, 4];
const test2 = [7, 6, 4, 3, 1];
const test3 = [2, 1, 4];
const test4 = [2, 3, 2, 1, 2];
const test5 = [3, 3, 5, 0, 0, 3, 1, 4];

console.log("teste 1", maxProfit(test1));
console.log("teste 2", maxProfit(test2));
console.log("teste 3", maxProfit(test3));
console.log("teste 4", maxProfit(test4));
console.log("teste 5", maxProfit(test5));
