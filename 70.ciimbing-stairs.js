/**
 * URL of this problem
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let tempArr = [1, 1];

	for (let i = 2; i <= n; i++) {
		tempArr[i] = tempArr[i - 1] + tempArr[i - 2];
	}

	return tempArr[n];
};
