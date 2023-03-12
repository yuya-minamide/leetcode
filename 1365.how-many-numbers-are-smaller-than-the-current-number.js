/**
 * URL of this problem
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	const Result = [];

	for (let i = 0; i < nums.length; i++) {
		let counter = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] < nums[i]) counter++;
		}
		Result.push(counter);
	}

	return Result;
};
