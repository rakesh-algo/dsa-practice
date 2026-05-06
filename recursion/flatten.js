function flatten(arr) {
  let result = [];
  if (!arr.length)
    return result;

  if (typeof(arr[0]) === 'number')
    result.push(arr[0]);
  else
    result = [...result, ...flatten(arr[0])];

  return result.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

