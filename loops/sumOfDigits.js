function sumOfDigits(num) {
  let sum = 0;
  let remainder;

  while (num !== 0) {
    remainder = num % 10;
    sum = sum + remainder;
    num = Math.trunc(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(12345)); // 15
console.log(sumOfDigits(4136)); // 14