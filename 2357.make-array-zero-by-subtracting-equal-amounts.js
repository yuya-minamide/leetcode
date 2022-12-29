/**
 * URL of this problem
 * https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	const UniqueNumsArr = new Set(nums);
	if (UniqueNumsArr.has(0)) {
		return UniqueNumsArr.size - 1;
	} else {
		return UniqueNumsArr.size;
	}
};
