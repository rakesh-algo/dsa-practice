// Function to print number pyramid pattern of stars
function print(n) {
  for (let row = 1; row <= n; ++row) {
    const spaces = ' '.repeat(n - row);
    const totalCols = (2 * row) - 1;
    let col = 1;
    let k = 0;
    let str = '';
    while (col <= totalCols) {
      if (col <= Math.ceil(totalCols / 2))
        k++;
      else
        k--;
      str += k;
      col++;
    }
    console.log(spaces + str);
  }
}

print(5);