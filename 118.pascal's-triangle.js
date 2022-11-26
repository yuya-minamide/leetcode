/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	const result = [];

	for (let i = 0; i < numRows; i++) {
		const hierarchicalArray = [];

		for (let j = 0; j < i + 1; j++) {
			if (j === 0 || j === i) {
				hierarchicalArray[j] = 1;
			} else {
				hierarchicalArray[j] = result[i - 1][j - 1] + result[i - 1][j];
			}
		}
		result.push(hierarchicalArray);
	}

	return result;
};
