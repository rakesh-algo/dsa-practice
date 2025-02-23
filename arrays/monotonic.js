function isMonotonic(arr) {
  if (arr.length < 2)
    return true;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1])
      decreasing = false;
    if (arr[i] < arr[i - 1])
      increasing = false;

    if (!increasing && !decreasing)
      return false;
  }
  return true;
}

console.log(isMonotonic([1, 2, 3, 4, 5]));   // true (increasing)
console.log(isMonotonic([5, 4, 3, 2, 1]));   // true (decreasing)
console.log(isMonotonic([1, 2, 2, 3, 4]));   // true (non-strictly increasing)
console.log(isMonotonic([3, 3, 3, 3]));      // true (all equal)
console.log(isMonotonic([1, 3, 2]));         // false (neither increasing nor decreasing)
console.log(isMonotonic([-5, -3, -2, 0]));   // true (increasing with negatives)
console.log(isMonotonic([10]));              // true (single element)
console.log(isMonotonic([]));                // true (empty array)
console.log(isMonotonic([1, 1, 1, 2, 1]));   // false (not monotonic)
