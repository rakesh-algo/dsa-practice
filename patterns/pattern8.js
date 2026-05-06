function print(num) {
  let row = [];
  let i;
  for (i = 1; i <= num; i++) {
    for (let m = num - i; m > 0; m--)
      row.push(' ');
    for (let j = 1; j <= i; j++) {
      row.push(j);
    }

    if (i >= 2) {
      for (let k = i - 1; k >= 1; k--)
        row.push(k);
    }
    console.log(row.join(''));
    row = [];
  }
}

print(5);

/**
          1
        1 2 1
      1 2 3 2 1
    1 2 3 4 3 2 1
  1 2 3 4 5 4 3 2 1
 

 */