function insertionSort(nums) {
  let j;
  for (let i = 1; i < nums.length; i++) {
    const currentVal = nums[i];
    for (j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentVal;
  }
  return nums;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [ 1, 2, 4, 9, 76 ]

