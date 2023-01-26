/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-distinct-averages/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
	const TempArr = [];
	const SortedNums = nums.sort((a, b) => a - b);

	for (let i = 0; i < SortedNums.length / 2; i++) {
		TempArr.push((SortedNums[i] + SortedNums[SortedNums.length - 1 - i]) / 2);
	}

	const Result = new Set(TempArr);
	return Result.size;
};
