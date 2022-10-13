/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 */

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const numbers = num.toString().split("").sort();
    return Math.floor(numbers[0] + numbers[2]) +  Math.floor(numbers[1] + numbers[3]);
};