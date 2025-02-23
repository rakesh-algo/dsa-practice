function sortedSquaredArray(arr) {
  const result = new Array(arr.length);
  if (!arr.length)
    return result;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let resultIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const leftSquare = Math.pow(arr[leftIndex], 2);
    const rightSquare = Math.pow(arr[rightIndex], 2);

    if (leftSquare > rightSquare) {
      result[resultIndex] = leftSquare;
      leftIndex++;
    } else {
      result[resultIndex] = rightSquare;
      rightIndex--;
    }
    resultIndex--;
  }
  return result;
}

console.log(sortedSquaredArray([-4, -2, 0, 1, 3]));  // [0, 1, 4, 9, 16]
console.log(sortedSquaredArray([-7, -3, -1, 2, 5]));  // [1, 4, 9, 25, 49]
console.log(sortedSquaredArray([0, 0, 0]));          // [0, 0, 0]
console.log(sortedSquaredArray([-2, -1]));           // [1, 4]
console.log(sortedSquaredArray([1, 2, 3, 4]));       // [1, 4, 9, 16]
console.log(sortedSquaredArray([]));                 // []
console.log(sortedSquaredArray([-1]));               // [1]
console.log(sortedSquaredArray([100]));              // [10000]
