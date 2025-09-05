function f(i, n, heights) {
  // Base case: at last stone
  if (i === n - 1) return 0;
  
  // If beyond last stone, invalid move
  if (i >= n) return Infinity;

  // Jump 1 step
  const one = Math.abs(heights[i] - heights[i + 1]) + f(i + 1, n, heights);

  // Jump 2 steps
  let two = Infinity;
  if (i + 2 < n) {
    two = Math.abs(heights[i] - heights[i + 2]) + f(i + 2, n, heights);
  }

  return Math.min(one, two);
}

const heights = [10, 30, 40, 20];
console.log(f(0, heights.length, heights)); // 30

