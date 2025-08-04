function transpose(matrix) {
  const result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[i].length);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result[col][row] = matrix[row][col];
    }
  }
  return result;
}

console.log(transpose([[1,2,3], [4,5,6], [7, 8, 9]]));  // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
