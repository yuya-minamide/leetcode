/**
 * URL of this problem
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
	let evenNumberOfDigits = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i].toString().length % 2 === 0) evenNumberOfDigits++;
	}

	return evenNumberOfDigits;
};
