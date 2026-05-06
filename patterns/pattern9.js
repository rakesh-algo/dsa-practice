function print(num) {
  // Top Half
  for (let row = 1; row <= num; row++) {
    const arr = [];
    for (let j = row; j <= num; j++) {
      arr.push(j);
    }
    const spaces = ' '.repeat(row - 1);
    console.log(spaces + arr.join(' '));
  }

  // Bottom half
  for (let row = num - 1; row > 0; row--) {
    const spaces = ' '.repeat(row - 1);
    const arr = [];
    for (let j = row; j <= num; j++) {
      arr.push(j);
    }

    console.log(spaces + arr.join(' '));
  }
}

print(7);


/**
1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7
*/