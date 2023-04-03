/**
 * URL of this problem
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 */

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
	const Result = [];

	for (let i = 0; i < index.length; i++) {
		Result.splice(index[i], 0, nums[i]);
	}

	return Result;
};
