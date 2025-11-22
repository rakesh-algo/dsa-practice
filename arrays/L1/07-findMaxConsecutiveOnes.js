function findMaxConsecutiveOnes(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1 && nums[0] === 1) return 1;

  let max = 0;
  let currentMax = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1)
      currentMax++;
    else {
      max = Math.max(max, currentMax);
      currentMax = 0;
    }
  }
  max = Math.max(max, currentMax);
  return max;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2