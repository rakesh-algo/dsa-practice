function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  for (const val of nums) {
    if (val === 1) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }

  max = Math.max(max, count);

  return max;
}


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
