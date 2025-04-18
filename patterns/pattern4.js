// Function to print center-aligned pyramid pattern of stars
function print(n) {
  for (let row = 1; row <= n; ++row) {
    const spaces = ' '.repeat(n - row);
    const stars = '*'.repeat(2 * row - 1);
    console.log(spaces + stars);
  }
}

print(5);