function removeDuplicates(nums) {
  if (nums.length < 2) return nums.length;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j])
      continue;
    else 
      nums[++i] = nums[j];
  }
  return i + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
