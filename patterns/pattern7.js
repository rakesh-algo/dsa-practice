// Function to print hourglass pattern of stars
function print(n) {
  // Top half
  for (let row = 1; row <= Math.ceil(n / 2); ++row) {
    const leftStars  = '*'.repeat(row);
    const spaces = ' '.repeat(Math.max(0, n - (2 * row)));
    const rightStars = '*'.repeat(n - leftStars?.length - spaces?.length);
    console.log(leftStars + spaces + rightStars);
  }

  // Bottom half
  for (let row = Math.ceil(n / 2) - 1; row > 0; --row) {
    const leftStars = '*'.repeat(row);
    const spaces = ' '.repeat(n - 2 * row);
    const rightStars = '*'.repeat(row);
    console.log(leftStars + spaces + rightStars);
  }
}

print(5);