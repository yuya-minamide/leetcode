/**
 * URL of this problem
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
	const Result = [];
	// ascending order
	const SortedNums = nums.sort((a, b) => a - b);

	for (let i = 0; i < SortedNums.length; i++) {
		if (SortedNums[i] === target) Result.push(i);
	}

	return Result;
};
