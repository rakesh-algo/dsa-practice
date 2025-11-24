function getOddSum(arr) {
  function helper(index) {
    if (index === arr.length)
      return 0;
    if (arr[index] % 2 !== 0)
      return arr[index] + helper(index + 1);
    return helper(index + 1);
  }
  return helper(0);
}

console.log(getOddSum([5, 3, 2, 3, 6, 7])); // 18

