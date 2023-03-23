/**
 * URL of this problem
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
	let result = 0;

	for (let i = 0; i < nums.length; i++) {
		let counter = 1;
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] > nums[j - 1]) {
				counter++;
			} else {
				result = Math.max(result, counter);
				counter = 1;
			}
		}
		result = Math.max(result, counter);
	}

	return result;
};
