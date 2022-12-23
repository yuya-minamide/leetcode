/**
 * URL of this problem
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
	const Result = [];

	for (let i = 0; i < matrix[0].length; i++) {
		let columnMax = 0;
		let indexOfMax = 0;
		for (let j = 0; j < matrix.length; j++) {
			if (matrix[j][i] > columnMax) {
				columnMax = matrix[j][i];
				indexOfMax = j;
			}
		}
		let rowMin = Math.min(...matrix[indexOfMax]);
		if (rowMin === columnMax) Result.push(columnMax);
	}

	return Result;
};
