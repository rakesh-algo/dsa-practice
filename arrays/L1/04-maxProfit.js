function maxProfit(prices) {
  let max = 0;

  let i = prices.length - 1;
  for (let j = i - 1; j >= 0; j--) {
    const currentProfit = prices[i] - prices[j];
    if (currentProfit < 0) {
      i = j;
    } else if (currentProfit > max) {
      max = currentProfit;
    }
  }
  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 4