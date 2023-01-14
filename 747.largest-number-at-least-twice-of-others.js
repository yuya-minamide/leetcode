/**
 * URL of this problem
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
	const DecNums = [...nums].sort((a, b) => b - a);

	if (DecNums[0] / DecNums[1] < 2) return -1;

	return nums.indexOf(DecNums[0]);
};
