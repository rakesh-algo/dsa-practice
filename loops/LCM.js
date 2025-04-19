function euclidGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function LCM(a, b) {
  return (a * b) / euclidGCD(a, b);
}

console.log(LCM(105, 36));
