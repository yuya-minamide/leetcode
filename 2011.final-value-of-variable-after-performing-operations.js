/**
 * URL of this problem
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
	let result = 0;

	for (let i = 0; i < operations.length; i++) {
		operations[i].includes("++") ? (result += 1) : (result -= 1);
	}

	return result;
};
