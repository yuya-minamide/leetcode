/**
 * URL of this problem
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
	const result = [];

	if (n % 2 === 1) result.push(0);

	for (let i = 1; i <= Math.floor(n / 2); i++) {
		result.push(i, -i);
	}

	return result;
};
