/**
 * URL of this problem
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
	if (k === 1) return 0;

	const SortedNums = nums.sort((a, b) => a - b);
	let difNum = Infinity;

	for (let i = 0; i <= SortedNums.length - k; i++) {
		difNum = Math.min(difNum, SortedNums[i + k - 1] - SortedNums[i]);
	}

	return difNum;
};
