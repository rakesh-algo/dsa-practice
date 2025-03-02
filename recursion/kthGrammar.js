function kthGrammar(n, k) {
  if (n === 1)
    return 0;
  const middle = Math.trunc(Math.pow(2, n - 1) / 2);
  if (k > middle)
    return 1 - kthGrammar(n - 1, k - middle);
  else
    return kthGrammar(n - 1, k);
}

console.log(kthGrammar(5, 2)); // 1
