/**
 * URL of this problem
 * https://leetcode.com/problems/neither-minimum-nor-maximum/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
	if (nums.length === 1 || nums.length === 2) return -1;

	const sortedNums = nums.sort((a, b) => a - b);
	return sortedNums[1];
};
