function someRecursive(arr, callback) {
  
  function helper(index = 0) {
    if (index === arr.length)
      return false;

    return callback(arr[index]) || helper(index + 1);
  }

  return helper();
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

