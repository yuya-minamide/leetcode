/**
 * URL of this problem
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
	let result = -1;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === 0) {
				if (Math.max(nums[i], nums[j]) > result) result = Math.max(nums[i], nums[j]);
			}
		}
	}

	return result;
};
