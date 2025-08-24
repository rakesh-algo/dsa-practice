function countBinaryStrings(n) {
  if (n === 1)
    return 2;
  if (n === 2)
    return 3;
  return countBinaryStrings(n - 1) + countBinaryStrings(n - 2);
}

console.log(countBinaryStrings(2)); // 3
console.log(countBinaryStrings(3)); // 5
console.log(countBinaryStrings(4)); // 8
console.log(countBinaryStrings(5)); // 13

