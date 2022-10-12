/**
 * URL of this problem
 * https://leetcode.com/problems/divide-array-into-equal-pairs/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let counter = 0;
    
    const sortNumbers = nums.sort()
    
    for (let i = 1; i < sortNumbers.length; i = i + 2) {
        if (nums[i] === nums[i - 1]) counter++
    }
    
    return nums.length / 2 === counter;
};