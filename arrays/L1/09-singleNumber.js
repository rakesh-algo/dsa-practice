var singleNumber = function(nums) {
    let num = 0;
    for (let i = 0;i < nums.length; i++)
        num ^= nums[i];
    return num;
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1