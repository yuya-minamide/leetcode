/**
 * URL of this problem
 * https://leetcode.com/problems/longest-subsequence-with-limited-sum/
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
	const Result = [];
	const SortedNums = nums.sort((a, b) => a - b);

	for (let i = 0; i < queries.length; i++) {
		let sum = SortedNums[0];
		let counter = 1;
		while (sum <= queries[i]) {
			sum += SortedNums[counter];
			counter++;
		}
		Result.push(counter - 1);
	}
	return Result;
};
