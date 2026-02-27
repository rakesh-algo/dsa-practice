function countWordsStartingWithVowel(str) {
  if (!str.length) return 0;
  let count = 0;
  let prev = '';

  for (const ch of str) {
    if (!prev || prev === ' ') {
      if (['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase()))
        count++;
    }
    prev = ch;
  }
  return count;
}

console.log(getWords("Was it a car or a cat I saw?"));