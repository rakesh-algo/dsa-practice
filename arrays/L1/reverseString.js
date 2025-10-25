function reverseString(s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    const temp = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // [ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
