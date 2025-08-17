function printColumnWave(arr) {
  const result = [];
  let row = 0;

  for (let col = 0; col < arr[0].length; col++) {
    if (col % 2 !== 0) {
      for (row = arr.length - 1; row >= 0; row--) {
        result.push(arr[row][col]);
      }
    } else {
      for (row = 0; row < arr.length; row++) {
        result.push(arr[row][col]);
      }
    }
  }
  console.log(result.join(' '));
}

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];

printColumnWave(A);
