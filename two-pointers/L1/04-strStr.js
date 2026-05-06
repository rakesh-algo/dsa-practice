function strStr(haystack, needle) {
  let start = 0;
  let end = needle.length - 1;

  let p1 = start, p2 = 0;
  while(end < haystack.length) {
    if (haystack[p1] === needle[p2]) {
      p1++;
      p2++;
    } else {
      start++;
      end++;
      p1 = start;
      p2 = 0;
    }
    if (p2 === needle.length)
      return start;
  }
  return -1;
}

console.log(strStr('sadbutsad', 'sad')); // 0
console.log(strStr('leetcode', 'leeto')); // -1
console.log(strStr("mississippi", "issip")); // 4
console.log(strStr("aaacaaaaac", "aaaa")); // 4
