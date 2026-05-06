function collectOddValues(nums, index = 0) {
  if (index === nums.length)
    return [];

  const rest = collectOddValues(nums, index + 1);

  if (nums[index] % 2 !== 0)
    return [nums[index], ...rest];
  return rest;
}

console.log(collectOddValues([5, 3, 2, 3, 6, 7])); // [5, 3, 3, 7]

