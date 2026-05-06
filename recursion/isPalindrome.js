function isPalindrome(str) {
  
  function helper(index = 0) {
    if (index === Math.floor(str.length / 2))
      return true;

    if (str[index] !== str[str.length - index - 1])
      return false;

    return helper(index + 1);
  }

  return helper();
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
