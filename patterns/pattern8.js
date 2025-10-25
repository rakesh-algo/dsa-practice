// Function to print number pyramid pattern of stars
function print(num) {
  for (let row = 1; row <= num; row++) {
    let str = '';
    str += ' '.repeat(num - row);
    for (let col = 1; col <= row; col++) {
      str += col;
    }

    for (let col = row - 1; col >= 1; col--) {
      str += col;
    }
    console.log(str);
  }
}

print(5);
