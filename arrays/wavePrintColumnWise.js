const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

let row = 0;
let col = 0;

for (col = 0; col < 4; col++) {
  let str = [];
  const isOdd = col % 2 === 1;
  row = isOdd ? 3 : 0;
  while ((isOdd && row >= 0) || (!isOdd && row < 4)) {
    str.push(arr[row][col]);
    if (isOdd) {
      row--;
    } else {
      row++;
    }
  }
  console.log(str.join(' '));
}