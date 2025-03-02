function findTheWinner(n, k) {
  function helper(n) {
    if (n === 1)
      return 0;
    return (helper(n - 1) + k) % n;
  }
  return helper(n) + 1;
}

console.log(findTheWinner(5, 2)); // 3
console.log(findTheWinner(6, 5)); // 1
