function findMaxConsecutiveOnes(nums) {
  if (!nums.length) return 0;
  let count = 0;
  let max = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }
  return Math.max(max, count);
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2