function getNegativesCount(arr) {
  return arr.reduce((acc, el) => acc + (el < 0 ? 1 : 0), 0);
}

console.log(getNegativesCount([3, -7, 2, -1, 9, -5, 0, 4, -3]));