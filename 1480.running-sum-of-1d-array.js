/**
 * URL of this problem
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	nums.reduce((acc, cur, idx, arr) => (arr[idx] += acc));
	return nums;
};
