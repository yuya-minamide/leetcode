/**
 * URL of this problem
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
	const Result = [];

	for (let i = 0; i < mat.length; i++) {
		Result.push([i, mat[i].reduce((acc, cur) => acc + cur, 0)]);
	}

	return Result.sort((a, b) => a[1] - b[1])
		.slice(0, k)
		.map((arr) => arr[0]);
};
