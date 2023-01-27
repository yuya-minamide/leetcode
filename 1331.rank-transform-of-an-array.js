/**
 * URL of this problem
 * https://leetcode.com/problems/rank-transform-of-an-array/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
	const SortedArr = [...new Set([...arr].sort((a, b) => a - b))];

	return arr.map((item) => {
		return SortedArr.indexOf(item) + 1;
	});
};
