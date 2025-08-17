function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let col = 0; col < cols; col++) {
    result[col] = [];
    for (let row = 0; row < rows; row++) {
      result[col][row] = matrix[row][col];
    }
  }

  return result;
}

console.log(transpose([[1,2,3], [4,5,6]])); // [[1, 4], [2, 5], [3, 6]]
