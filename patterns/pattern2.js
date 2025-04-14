function print(n) {
  let str;
  for (let row = 0; row < n; ++row) {
    str = '';
    for (let col = 0; col <= row; ++col) {
      str += '*';
    }
    console.log(str);
  }
}

print(6);
