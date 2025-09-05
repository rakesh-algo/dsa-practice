function mazePath(i, j, m, n) {
  // Out of bounds
  if (i >= m || j >= n) return 0;
  
  // Reached destination
  if (i === m - 1 && j === n - 1) return 1;

  // Move right + move down
  return mazePath(i, j + 1, m, n) + mazePath(i + 1, j, m, n);
}

// Example
console.log(mazePath(0, 0, 3, 3)); // 6
