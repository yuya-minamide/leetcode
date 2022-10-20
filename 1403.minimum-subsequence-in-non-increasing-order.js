/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    
    const sortNums = nums.sort((a,b) => b - a);
    const totalSum = sortNums.reduce((a, b) => a + b);
    
    let counter = 0;
    for (let i = 0; i < sortNums.length; i++) {
        counter += sortNums[i];
        if (counter > totalSum - counter) return sortNums.slice(0, i + 1);
    }
};