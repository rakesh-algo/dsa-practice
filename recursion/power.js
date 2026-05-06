function power(base, exponent) {
  if (exponent === 0)
    return 1;
  if (exponent === 1)
    return base;

  if (exponent % 2 === 0) {
    const half = power(base, exponent / 2);
    return half * half;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 6)); // 64
console.log(power(2, 3)); // 8
console.log(power(2, 0)); // 1
