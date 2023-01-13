/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
	const DecNums = nums.sort((a, b) => b - a);
	return Math.max(
		DecNums[0] * DecNums[1] * DecNums[2],
		DecNums[0] * DecNums[DecNums.length - 1] * DecNums[DecNums.length - 2]
	);
};
