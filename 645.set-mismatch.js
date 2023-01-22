/**
 * URL of this problem
 * https://leetcode.com/problems/set-mismatch/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	const CheckedNums = [];
	const Result = [];

	for (let i = 0; i < nums.length; i++) {
		if (CheckedNums[nums[i]] === undefined) {
			CheckedNums[nums[i]] = 1;
		} else {
			Result[0] = nums[i];
		}
	}

	for (let i = 1; i <= nums.length; i++) {
		if (CheckedNums[i] === undefined) {
			Result[1] = i;
		}
	}

	return Result;
};
