/**
 * URL of this problem
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 2]) {
			nums.splice(i + 2, 1);
			i--;
		}
	}
};
