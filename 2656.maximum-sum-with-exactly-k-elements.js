/**
 * URL of this problem
 * https://leetcode.com/problems/sum-multiples/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
	let sortedNums = nums.sort((a, b) => b - a);
	let sum = 0;

	while (k > 0) {
		sum += sortedNums[0];
		sortedNums[0]++;
		k--;
	}

	return sum;
};
