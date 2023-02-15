/**
 * URL of this problem
 * https://leetcode.com/problems/separate-the-digits-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
	return nums
		.join("")
		.split("")
		.map((num) => Number(num));
};
