/**
 * URL of this problem
 * https://leetcode.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let redefinedNums = [...nums];
    
    for (let i = 0; i < nums.length; i++) {
        if (redefinedNums[i] === target) {
            return redefinedNums.indexOf(target);
        } else {
            redefinedNums.push(target);
        }
    }
    
    return redefinedNums.sort((a, b) => a - b).indexOf(target);
};