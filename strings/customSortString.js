var customSortString = function(order, s) {
  const freq = {};
  let result = '';
  
  for (const ch of s)
    freq[ch] = (freq[ch] || 0) + 1;

  for (const ch of order) {
    if (freq[ch]) {
      result += ch.repeat(freq[ch]);
      delete freq[ch];
    }
  }

  const remaining = Object.keys(freq).sort();

  for (const ch of remaining) {
    result += ch.repeat(freq[ch]);
  }
  return result;
};


console.log(customSortString("hucw", "utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh")); // hhhhhuucccwaaaaaaaaabbdddddeffffggggiijjjjkkkkllllmmmmnnnoooopppqqqqqqqqqqqrsssttttttttvxxxxxyyzzzzz
