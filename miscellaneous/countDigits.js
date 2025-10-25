function countDigits(num) {
  return Math.abs(num).toString().length;
}

console.log(countDigits(7));        // 1
console.log(countDigits(12345));    // 5
console.log(countDigits(987654));   // 6
console.log(countDigits(0));        // 1
console.log(countDigits(-123));     // 3
