/**
 * URL of this problem
 * https://leetcode.com/problems/delete-greatest-value-in-each-row/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
	const CopyedGrid = [...grid];
	for (let i = 0; i < grid.length; i++) {
		CopyedGrid[i].sort((a, b) => b - a);
	}

	let sum = 0;
	while (CopyedGrid[0].length > 0) {
		let rowGreatestNum = 0;
		for (let j = 0; j < CopyedGrid.length; j++) {
			rowGreatestNum = Math.max(rowGreatestNum, CopyedGrid[j].shift());
		}
		sum += rowGreatestNum;
	}

	return sum;
};
