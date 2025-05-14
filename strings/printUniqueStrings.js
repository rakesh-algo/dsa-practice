function printUniqueStrings(strArr) {
  const unique = {};
  for (const str of strArr) {
    if (!unique[str]){
      unique[str] = true;
    }
  }

  return Object.keys(unique);
}

console.log(printUniqueStrings(['abc', 'hello', 'c', 'd', 'abc', 'c', 'd'])); // [ 'abc', 'hello', 'c', 'd' ]
