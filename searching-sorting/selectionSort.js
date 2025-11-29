function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      [nums[i], nums[smallestIndex]] = [nums[smallestIndex], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort([34, 22, 10, 19, 17])); // [ 10, 17, 19, 22, 34 ]