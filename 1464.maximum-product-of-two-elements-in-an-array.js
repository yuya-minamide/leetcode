/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	// descending order
	const SortedNums = nums.sort((a, b) => b - a);

	const HighestNumIndex = nums.indexOf(SortedNums[0]);
	const SecondHighestNumIndex = nums.indexOf(SortedNums[1]);

	return (nums[HighestNumIndex] - 1) * (nums[SecondHighestNumIndex] - 1);
};
