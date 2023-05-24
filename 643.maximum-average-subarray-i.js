/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	let sum = 0;
	let max = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (i >= k - 1) {
			max = Math.max(max, sum);
			sum -= nums[i - (k - 1)];
		}
	}

	return max / k;
};
