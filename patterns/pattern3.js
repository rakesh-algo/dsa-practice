// Function to print right aligned triangle pattern of stars
function printRightAlignedTriangle(n) {
  for (let row = 1; row <= n; ++row) {
    const spaces = ' '.repeat(n - row);
    const stars = '*'.repeat(row);
    console.log(spaces + stars);
  }
}

printRightAlignedTriangle(5);

/**
 *       *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********
 * 
 */