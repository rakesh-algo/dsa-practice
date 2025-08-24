function intersection(nums1, nums2) {
  const freq1 = {};
  const freq2 = {};

  for (const num of nums1)
    freq1[num] = (freq1[num] ?? 0) + 1;

  for (const num of nums2)
    freq2[num] = (freq2[num] ?? 0) + 1;

  return Object.keys(freq1).filter(el => el in freq2).map(el => +el);
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
