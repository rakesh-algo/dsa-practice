function missingNumber(nums) {
  let n = nums.length;
  let totalSum = n * (n + 1) / 2;
  let currentSum = 0;
  for (const val of nums) {
    currentSum += val;
  }
  return totalSum - currentSum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([0, 2])); // 1
