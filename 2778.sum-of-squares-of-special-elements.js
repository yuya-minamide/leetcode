/**
 * URL of this problem
 * https://leetcode.com/problems/sum-of-squares-of-special-elements/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
	const specialNums = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums.length % (i + 1) === 0) specialNums.push(nums[i]);
	}

	let total = 0;
	for (let i = 0; i < specialNums.length; i++) {
		total += specialNums[i] * specialNums[i];
	}

	return total;
};
