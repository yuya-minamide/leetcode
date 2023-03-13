/**
 * URL of this problem
 * https://leetcode.com/problems/left-and-right-sum-differences/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
	if (nums.length === 1) return [0];

	// First value of LeftSum must be 0
	const LeftSum = [0];
	const RightSum = [];
	const Result = [];

	for (let i = 1; i < nums.length; i++) {
		const TargetNumsLeft = nums.slice(0, i);
		const TargetNumsRight = nums.slice(i);
		LeftSum.push(TargetNumsLeft.reduce((acc, cur) => acc + cur));
		RightSum.push(TargetNumsRight.reduce((acc, cur) => acc + cur));
	}
	// Last Value of RightSum must be 0
	RightSum.push(0);

	for (let i = 0; i < LeftSum.length; i++) {
		Result.push(Math.abs(LeftSum[i] - RightSum[i]));
	}

	return Result;
};
