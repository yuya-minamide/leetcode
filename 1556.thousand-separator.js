/**
 * URL of this problem
 * https://leetcode.com/problems/thousand-separator/
 */

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	if (n.length <= 3) return n;

	const StrOfN = n.toString();
	const Result = [];
	for (let i = StrOfN.length; i > 0; i -= 3) {
		Result.unshift(StrOfN.substring(Math.max(0, i - 3), i));
	}

	return Result.join(".");
};
