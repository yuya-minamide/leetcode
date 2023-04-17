/**
 * URL of this problem
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	const UniNumArr = [...new Set(nums)];

	for (let i = 0; i < UniNumArr.length; i++) {
		nums[i] = UniNumArr[i];
	}

	return UniNumArr.length;
};
