function bubbleSort(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return nums;
}

console.log(bubbleSort([5, 2, 4, 1])); // [1, 2, 4, 5]