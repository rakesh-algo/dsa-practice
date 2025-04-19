/**
 * Palindrome is a word, phrase or sentence that reads same forwards and backwards. Ignore Spaces, Punctuation and capitalization.
 */


function isPalindrome(input) {
  input = typeof input === 'number' ? String(input) : input;
  const cleanStr = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right])
      return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome(1229));               // false
console.log(isPalindrome(1551));               // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?"));   // true
console.log(isPalindrome("No 'x' in Nixon"));  // true




