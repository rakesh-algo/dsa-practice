// Function to print right-angled triangle pattern of stars
function print(n) {
  for (let row = 1; row <= n; ++row) {
    console.log('*'.repeat(row));
  }
}

// Example usage:
print(10);
