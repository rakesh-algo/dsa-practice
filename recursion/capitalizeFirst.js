function capitalizeFirst(arr, index = 0) {
  if (index === arr.length) return [];

  const word = arr[index];
  const capitalized =
    word[0].toUpperCase() + word.slice(1);

  return [capitalized].concat(
    capitalizeFirst(arr, index + 1)
  );
}

console.log(capitalizeFirst(['car','taco','banana'])); // [ 'Car', 'Taco', 'Banana' ]