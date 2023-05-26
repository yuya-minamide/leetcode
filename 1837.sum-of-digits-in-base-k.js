/**
 * URL of this problem
 * https://leetcode.com/problems/sum-of-digits-in-base-k/
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
	const Num = n.toString(k);
	return Num.split("").reduce((a, b) => Number(a) + Number(b));
};
