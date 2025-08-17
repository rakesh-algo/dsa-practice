function printAllSubarrays(nums) {
  for (let i = 0;i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sub = [];
      for (let k = i; k <= j; k++) {
        sub.push(nums[k]);
      }
      console.log('[' + sub.join() + ']');
    }
  }
}

printAllSubarrays([1, 2, 3, 4, 5]);
