/**
 * URL of this problem
 * https://leetcode.com/problems/array-reduce-transformation/
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	if (nums.length === 0) return init;

	let sum = init;

	for (let i = 0; i < nums.length; i++) {
		sum = fn(sum, nums[i]);
	}

	return sum;
};
