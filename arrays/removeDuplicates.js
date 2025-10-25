function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  let count = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j])
      continue;
    else {
      nums[++i] = nums[j];
      count++;
    }
  }
  return count;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
