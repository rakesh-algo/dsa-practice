function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0;i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = -nums[i];
    const map = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - nums[j];
      if (map.has(complement)) {
        result.push([nums[i], complement, nums[j]]);

        // skip duplicates for nums[j]
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      map.set(nums[j], i);
    }
  }
  return result;
}


console.log(threeSum([-1,0,1,2,-1,-4])); // [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]
console.log(threeSum([0,0,0,0]));