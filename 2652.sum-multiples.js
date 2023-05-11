/**
 * URL of this problem
 * https://leetcode.com/problems/sum-multiples/
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
	const DivisibleNums = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) DivisibleNums.push(i);
	}

	const RemovedSameNum = [...new Set(DivisibleNums)];

	return RemovedSameNum.reduce((acc, cur) => acc + cur, 0);
};
