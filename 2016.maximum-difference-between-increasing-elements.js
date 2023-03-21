/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
	let diffNum = -1;

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] < nums[j]) diffNum = Math.max(diffNum, nums[j] - nums[i]);
		}
	}

	return diffNum;
};
