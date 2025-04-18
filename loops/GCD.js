function GCD(a, b) {
  let result = 1;
  for (let i = 2; i <= Math.min(a, b); ++i) {
    if (a % i === 0 && b % i === 0)
      result = i;
  }
  return result;
}

function euclidGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(GCD(28, 24)); // 4
console.log(GCD(7, 11));  // 1

console.log(euclidGCD(105, 36)); // 3