function reverseString(s) {
  const len = s.length;
  const halfLength = Math.floor(len / 2);

  for (let i = 0;i < halfLength; i++) {
    const temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // [ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
