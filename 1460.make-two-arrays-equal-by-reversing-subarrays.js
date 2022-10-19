/**
 * URL of this problem
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    const sortTarget = target.sort();
    const sortArr = arr.sort();
    
    return sortTarget.toString() === sortArr.toString();
};