/**
 * URL of this problem
 * https://leetcode.com/problems/smallest-even-multiple/
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2;
};