function buildLPS(needle) {
  const lps = new Array(needle.length).fill(0);
  let i = 0; // length of previous longest prefix suffix
  let j = 1;

  while (j < needle.length) {
    if (needle[i] === needle[j]) {
      i++;
      lps[j] = i;
      j++;
    } else {
      if (i !== 0) {
        i = lps[i - 1];
      } else {
        lps[j] = 0;
        j++;
      }
    }
  }
  return lps;
}

function strStrKMP(haystack, needle) {
  if (needle.length === 0) return 0;

  const lps = buildLPS(needle);
  let i = 0; // pointer for haystack
  let j = 0; // pointer for needle

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j; // match found!
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1]; // smart skip — don't reset j to 0!
      } else {
        i++;
      }
    }
  }
  return -1;
}

console.log(strStrKMP('sadbutsad', 'sad')); // 0
console.log(strStrKMP('leetcode', 'leeto')); // -1
console.log(strStrKMP("mississippi", "issip")); // 4
console.log(strStrKMP("aaacaaaaac", "aaaa")); // 4

