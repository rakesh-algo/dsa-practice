function reverseNumber(num) {
  let remainder;
  let reversedNumber = 0;

  while (num !== 0) {
    remainder = num % 10;
    reversedNumber = (reversedNumber * 10) + remainder;
    num = Math.trunc(num / 10);
  }
  return reversedNumber;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-15));   // -51
console.log(reverseNumber(0));     // 0

