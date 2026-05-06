function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
}

console.log(twoSum([2,7,11,15], 9)); // [1, 2]
console.log(twoSum([2,3,4], 6)); // [ 1, 3 ]
