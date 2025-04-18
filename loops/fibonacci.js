function fibonacci(n) {
  let first = 0;
  let second = 1;
  
  if (n >= 1) console.log(first);
  if (n >= 2) console.log(second);

  for (let i = 3; i <= n; ++i) {
    const next = first + second;
    console.log(next);
    first = second;
    second = next;
  }
}

fibonacci(6);