/**
 * URL of this problem
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let x = nums.length; x >= 0; x--) {
        let counter = 0;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= x) counter++;
        }
        
        if (x === counter) return x;
        counter = 0;
    }
    
    return -1;
};