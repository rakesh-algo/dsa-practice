function isPangram(str) {
  const letters = new Set();
  const cleanStr = str.toLowerCase();
  for (const ch of cleanStr) {
    if (ch >= 'a' && ch <= 'z')
      letters.add(ch);
  }
  return letters.size === 26;
}

console.log(isPangram('The five boxing wizards jump quickly')); // true
console.log(isPangram('The five boxing wizards jump quick')); // false