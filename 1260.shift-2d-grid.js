/**
 * URL of this problem
 * https://leetcode.com/problems/shift-2d-grid/
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
	const FlatArr = grid.flat();
	const Result = [];

	for (let i = 0; i < k; i++) {
		FlatArr.unshift(FlatArr.pop());
	}

	for (let j = 0; j < grid.length; j++) {
		Result.push(FlatArr.splice(0, grid[0].length));
	}

	return Result;
};
