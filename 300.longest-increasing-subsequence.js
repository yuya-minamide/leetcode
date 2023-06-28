/**
 * URL of this problem
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	const longestEndPoint = new Array(nums.length).fill(1);
	let count = 1;

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				longestEndPoint[i] = Math.max(longestEndPoint[i], longestEndPoint[j] + 1);
				count = Math.max(count, longestEndPoint[i]);
			}
		}
	}

	return count;
};
