// Function to print right-angled triangle pattern of stars
function printRightTriangle(n) {
  for (let row = 1; row <= n; ++row) {
    console.log('*'.repeat(row));
  }
}

// Example usage:
printRightTriangle(10);
