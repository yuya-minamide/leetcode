/**
 * URL of this problem
 * https://leetcode.com/problems/count-largest-group/
 */

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
	const digitSumFrequency = {};

	for (let i = 1; i <= n; i++) {
		let digitSum = 0;
		let numCopy = i;
		while (numCopy > 0) {
			digitSum += numCopy % 10;
			numCopy = Math.floor(numCopy / 10);
		}

		!digitSumFrequency[digitSum] ? (digitSumFrequency[digitSum] = 1) : digitSumFrequency[digitSum]++;
	}

	let maxFrequency = 0;
	for (const sum in digitSumFrequency) {
		maxFrequency = Math.max(maxFrequency, digitSumFrequency[sum]);
	}

	let count = 0;
	for (const sum in digitSumFrequency) {
		if (digitSumFrequency[sum] === maxFrequency) count++;
	}

	return count;
};
