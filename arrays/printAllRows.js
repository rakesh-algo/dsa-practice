function printAllRows(arr) {
  for (let i = 0;i < arr.length; i++) {
    const sub = [];
    for (let j = 0;j < arr[i].length; j++) {
      sub.push(arr[i][j]);
    }
    console.log(sub.join(' '));
  }
}

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

printAllRows(A);