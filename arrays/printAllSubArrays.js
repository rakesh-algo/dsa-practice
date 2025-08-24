function printAllSubarrays(nums) {
  for (let start = 0;start < nums.length; start++) {
    const sub = [];
    for (let end = start; end < nums.length; end++) {
      sub.push(nums[end]);
      console.log('[' + sub.join() + ']');
    }
  }
}

printAllSubarrays([1, 2, 3, 4, 5]);
