function print(n, index = 1) {
  if (index > n)
    return;
  console.log(index);
  print(n, index + 1);
}

print(5);


