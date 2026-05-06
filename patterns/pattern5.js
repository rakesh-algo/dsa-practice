// Function to print inverted right triangle pattern of starts
function printReverseTriangle(n) {
  for (let row = n; row > 0; --row) {
    console.log('*'.repeat(row));
  }
}

printReverseTriangle(10);