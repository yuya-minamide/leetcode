/**
 * URL of this problem
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
	const SortedNums = nums.sort((a, b) => a - b);
	let result = 0;

	for (let i = 0; i < SortedNums.length / 2; i++) {
		result = Math.max(result, SortedNums[i] + SortedNums[SortedNums.length - i - 1]);
	}

	return result;
};
