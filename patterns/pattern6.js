// Function to print diamond pattern of stars
function print(n) {
  // Top half
  for (let row = 1; row <= n; ++row) {
    const spaces = ' '.repeat(n - row);
    const stars = '*'.repeat(2 * row - 1);
    console.log(spaces + stars);
  }

  // Bottom half
  for (let row = n - 1; row > 0; --row) {
    const spaces = ' '.repeat(n - row);
    const stars = '*'.repeat(2 * row - 1);
    console.log(spaces + stars);
  }
}

print(5);