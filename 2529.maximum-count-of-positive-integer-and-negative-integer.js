/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
	const PosiNum = nums.filter((num) => num > 0);
	const NegaNum = nums.filter((num) => num < 0);

	return Math.max(PosiNum.length, NegaNum.length);
};
