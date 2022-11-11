/**
 * URL of this problem
 * https://leetcode.com/problems/monotonic-array/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const stringNums = [...nums].join("");
    const increaseNumber = [...nums].sort((a, b) => a - b).join("");
    const decreaseNumber = [...nums].sort((a, b) => b - a).join("");

    return stringNums === increaseNumber || stringNums === decreaseNumber;
    
};