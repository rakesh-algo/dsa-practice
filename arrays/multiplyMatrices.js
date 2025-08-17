function multiplyMatrices(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
    throw new Error("Matrix dimensions do not match for multiplication");
  }

  const result = new Array(rowsA);
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB).fill(0);
  }

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

const A = [
  [1, 2],
  [3, 4]
];
const B = [
  [5, 6],
  [7, 8]
];

console.log(multiplyMatrices(A, B));