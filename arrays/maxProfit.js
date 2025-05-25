function maxProfit(prices) {
  let minPrice = Infinity;
  let max = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      max = Math.max(max, price - minPrice);
    }
  }
  return max;
}

console.log(maxProfit([7, 2, 5, 1, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0