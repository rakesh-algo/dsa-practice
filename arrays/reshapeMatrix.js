function reshapeMatrix(mat, r_new, c_new) {
  let m = mat.length;
  let n = mat[0].length;

  if (m * n !== r_new * c_new) return mat;

  const result = new Array(r_new);

  for (let i = 0; i < r_new; i++) {
    result[i] = new Array(c_new);
  }

  let row = 0;
  let col = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c_new) {
        col = 0;
        row++;
      }
    }
  }
  return result;
}

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

const r_new = 2;
const c_new = 6;

console.log(reshapeMatrix(A, r_new, c_new));



