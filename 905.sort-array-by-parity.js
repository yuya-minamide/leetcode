/**
 * URL of this problem
 * https://leetcode.com/problems/sort-array-by-parity/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let evenNumber = nums.filter((a) => a % 2 === 0);
    let oddNumber = nums.filter((a) => a % 2 === 1);
    
    return evenNumber.concat(oddNumber);
};
