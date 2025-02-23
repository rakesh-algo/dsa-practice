function secondMax(arr) {
  if (arr.length <= 1) return null;
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const val of arr) {
    if (val > firstMax) {
      secondMax = firstMax;
      firstMax = val;
    } else if (val > secondMax && val !== firstMax) {
      secondMax = val;
    }
  }
  if (secondMax === -Infinity)
    return null;
  return secondMax;
}

console.log(secondMax([10, 20, 30, 40])); // 30
console.log(secondMax([5, 5, 5, 5])); // null
console.log(secondMax([10])); // null
console.log(secondMax([-10, -20, -30, -40])); // -20
console.log(secondMax([5, 3, 5, 1])); // 3
console.log(secondMax([])); // null
console.log(secondMax([1, 2])); // 1
console.log(secondMax([2, 2, 1, 1])); // 1
