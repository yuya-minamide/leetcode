/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
	const sortedNums = nums.sort((a, b) => a - b);
	let counter = 0;

	for (let i = 1; i <= sortedNums.length; i++) {
		while (sortedNums[i] <= sortedNums[i - 1]) {
			sortedNums[i] += 1;
			counter += 1;
		}
	}

	return counter;
};
