/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
	if (nums.length === 1) return [0, 1];

	const sortedNums = [...nums].sort((a, b) => a - b);
	let pairCounts = 0;
	let remnantNums = 0;
	let i = 0;

	while (i < sortedNums.length - 1) {
		if (sortedNums[i] === sortedNums[i + 1]) {
			pairCounts++;
			sortedNums.shift();
			sortedNums.shift();
		} else {
			i++;
		}
	}
	remnantNums = sortedNums.length;

	return [pairCounts, remnantNums];
};
