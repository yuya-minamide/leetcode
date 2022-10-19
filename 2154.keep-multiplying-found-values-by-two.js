/**
 * URL of this problem
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two/
 */

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    
    let finalNumber = original;
    
    while (nums.includes(finalNumber)) {
        finalNumber *= 2;
    }
    
    return finalNumber;
};