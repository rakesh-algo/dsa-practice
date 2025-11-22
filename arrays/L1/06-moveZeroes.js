function moveZeroes(nums) {
  if (nums.length < 2) return nums;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i++] = nums[j];
    }
  }

  while (i < nums.length) {
    nums[i++] = 0;
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); // [0]