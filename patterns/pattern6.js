// Function to print diamond pattern of stars

function printPyramidRow(n, row) {
  const spaces = ' '.repeat(n - row);
  const stars = '*'.repeat(2 * row - 1);
  console.log(spaces + stars);
}

function printDiamond(n) {
  // Top half
  for (let row = 1; row <= n; ++row) {
    printPyramidRow(n, row);
  }

  // Bottom half
  for (let row = n - 1; row > 0; --row) {
    printPyramidRow(n, row);
  }
}

print(5);