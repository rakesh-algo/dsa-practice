function decimalToBinary(num) {
  if (num === 0) return '0';

  let str = '';
  let remainder;

  while (num > 0) {
    remainder = num % 2;
    str += remainder;
    num = Math.trunc(num / 2);
  }
  return [...str].reverse().join('');
}

console.log(decimalToBinary(5)); // 101
console.log(decimalToBinary(9)); // 1001
console.log(decimalToBinary(13)); // 1101
console.log(decimalToBinary(15)); // 1111
console.log(decimalToBinary(0));  // 0
