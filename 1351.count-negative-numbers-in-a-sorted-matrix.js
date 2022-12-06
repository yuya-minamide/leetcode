/**
 * URL of this problem
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	const FlatArr = grid.flat();
	const NegativeNums = FlatArr.filter((num) => num < 0);

	return NegativeNums.length;
};
