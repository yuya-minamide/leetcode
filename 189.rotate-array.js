/**
 * URL of this problem
 * https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let rotated = [...nums];

	for (let i = 0; i < rotated.length; i++) {
		let idx = (i + k) % nums.length;
		nums[idx] = rotated[i];
	}
};
