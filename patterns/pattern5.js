// Function to print inverted right triangle pattern of starts
function print(n) {
  for (let row = n; row > 0; --row) {
    console.log('*'.repeat(row));
  }
}

print(10);