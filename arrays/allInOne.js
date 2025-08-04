// ========================================
// ARRAY PROBLEMS FOR FRONTEND INTERVIEWS
// ========================================

// =================
// EASY PROBLEMS
// =================

// 1. TWO SUM
// Given an array of integers and a target, return indices of two numbers that add up to target
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// 2. REMOVE DUPLICATES FROM SORTED ARRAY
// Remove duplicates in-place, return new length
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let writeIndex = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Test
let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); // 2
console.log(arr1.slice(0, 2)); // [1, 2]

// 3. MOVE ZEROS TO END
// Move all zeros to end while maintaining relative order
function moveZeroes(nums) {
    let writeIndex = 0;
    
    // Move all non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    // Fill remaining positions with zeros
    while (writeIndex < nums.length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }
    
    return nums;
}

// Test
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// 4. BEST TIME TO BUY AND SELL STOCK
// Find maximum profit from buying and selling stock once
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}

// Test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

// ===================
// MEDIUM PROBLEMS
// ===================

// 5. PRODUCT OF ARRAY EXCEPT SELF
// Return array where output[i] = product of all elements except nums[i]
function productExceptSelf(nums) {
    const result = new Array(nums.length);
    
    // Calculate left products
    result[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Calculate right products and multiply with left
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

// Test
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// 6. ROTATE ARRAY
// Rotate array to the right by k steps
function rotate(nums, k) {
    k = k % nums.length;
    
    // Helper function to reverse array portion
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    
    // Reverse entire array
    reverse(0, nums.length - 1);
    // Reverse first k elements
    reverse(0, k - 1);
    // Reverse remaining elements
    reverse(k, nums.length - 1);
    
    return nums;
}

// Test
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]

// 7. CONTAINER WITH THE MOST WATER
// Find two lines that form container with most water
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, width * currentHeight);
        
        // Move the pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

// Test
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// 8. 3SUM
// Find all unique triplets that sum to zero
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Test
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]

// =============================
// FRONTEND-SPECIFIC PROBLEMS
// =============================

// 9. FLATTEN NESTED ARRAY (like nested components)
function flattenArray(arr) {
    const result = [];
    
    function flatten(element) {
        if (Array.isArray(element)) {
            element.forEach(flatten);
        } else {
            result.push(element);
        }
    }
    
    arr.forEach(flatten);
    return result;
}

// Alternative using built-in method
function flattenArrayBuiltIn(arr) {
    return arr.flat(Infinity);
}

// Test
console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// 10. GROUP ARRAY BY PROPERTY (common in data processing)
function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

// Test
const users = [
    { name: 'John', role: 'admin' },
    { name: 'Jane', role: 'user' },
    { name: 'Bob', role: 'admin' }
];
console.log(groupBy(users, 'role'));
// { admin: [{ name: 'John', role: 'admin' }, { name: 'Bob', role: 'admin' }], user: [{ name: 'Jane', role: 'user' }] }

// 11. FIND MISSING NUMBER (common in form validation)
function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Test
console.log(findMissingNumber([3, 0, 1])); // 2

// 12. SLIDING WINDOW MAXIMUM (useful for data visualization)
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside window
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove smaller elements from back
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add to result if window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}

// Test
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]

// ========================
// INTERVIEW TIPS
// ========================

/*
KEY PATTERNS TO MASTER:

1. TWO POINTERS
   - Use when array is sorted or you need to find pairs
   - Examples: Two Sum II, Container with Water

2. SLIDING WINDOW
   - Use for subarray problems
   - Examples: Maximum subarray, longest substring

3. HASH MAP
   - Use for O(1) lookups and counting
   - Examples: Two Sum, Group Anagrams

4. SORTING
   - Often simplifies the problem
   - Examples: 3Sum, Merge Intervals

5. IN-PLACE MANIPULATION
   - Modify array without extra space
   - Examples: Move Zeroes, Rotate Array

FRONTEND-SPECIFIC CONSIDERATIONS:
- Think about real-world applications (data processing, form validation)
- Consider performance for large datasets (user lists, search results)
- Explain how you'd handle edge cases in UI context
- Discuss memory efficiency for client-side applications
*/