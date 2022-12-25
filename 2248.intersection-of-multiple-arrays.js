/**
 * URL of this problem
 * https://leetcode.com/problems/intersection-of-multiple-arrays/
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
	const Result = [];

	for (let i = 0; i < nums[0].length; i++) {
		if (nums.every((ele) => ele.includes(nums[0][i]))) Result.push(nums[0][i]);
	}

	return Result.sort((a, b) => a - b);
};
