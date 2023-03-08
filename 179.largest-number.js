/**
 * URL of this problem
 * https://leetcode.com/problems/largest-number/
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	const SortedNums = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

	return SortedNums.startsWith("0") ? "0" : SortedNums;
};
