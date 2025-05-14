function reverseArray(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return arr;
}

console.log(reverseArray([5, 9, 1, 8, 2, 3]));  // [ 3, 2, 8, 1, 9, 5 ]