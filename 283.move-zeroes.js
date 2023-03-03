/**
 * URL of this problem
 * https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let length = nums.length;

	for (let i = 0; i < lenth; i++) {
		if (nums[i] == 0) {
			nums.splice(i, 1);
			nums.push(0);
			i--;
			length--;
		}
	}
};
