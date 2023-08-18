/**
 * URL of this problem
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 */

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
	const nArr = n.split("");
	return Math.max(...nArr);
};
