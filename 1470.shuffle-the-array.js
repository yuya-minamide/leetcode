/**
 * URL of this problem
 * https://leetcode.com/problems/shuffle-the-array/
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	const Result = [];

	for (let i = 0; i < n; i++) {
		Result.push(nums[i], nums[i + n]);
	}

	return Result;
};
