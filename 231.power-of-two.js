/**
 * URL of this problem
 * https://leetcode.com/problems/power-of-two/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	const Power = Math.log2(n);

	return Power % 1 === 0;
};
