function isPalindrome(num) {
  if (num < 0)
    return false;
  num = num.toString();
  let leftIndex = 0;
  let rightIndex = num.length - 1;

  while (leftIndex < rightIndex) {
    if (num[leftIndex] !== num[rightIndex])
      return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(11)); // true