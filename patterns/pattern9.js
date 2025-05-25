function print(n) {
  for (let row = 1; row <= n; ++row) {
    const spaces = ' '.repeat(row === 1 ? 0 : row - 1);
    const stars = Array.from({length: n - row + 1}, (_, i) => i + row).join(' ');
    console.log(spaces + stars);
  }

  for (let row = n - 1; row >= 1; row--) {
    const spaces = ' '.repeat(row === 1 ? 0 : row - 1);
    const stars = Array.from({length: n - row + 1}, (_, i) => i + row).join(' ');
    console.log(spaces + stars);
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