function multiplyMatrices(A, B) {
  const m = A.length;
  const n = A[0].length;
  const p = B[0].length;

  const result = new Array(m);
  for (let i = 0;i < m; i++) {
    result[i] = new Array(p).fill(0);
  }

  for (let i = 0;i < m; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0;k < n; k++) {
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