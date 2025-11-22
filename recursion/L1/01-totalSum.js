function totalSum(num) {
  if (num === 1) return 1;
  return num + totalSum(num - 1);
}

console.log(totalSum(5)); // 15
