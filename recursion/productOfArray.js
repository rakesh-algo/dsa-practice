function productOfArray(arr, index = 0) {
  if (index === arr.length)
    return 1;

  return arr[index] * productOfArray(arr, index + 1);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
