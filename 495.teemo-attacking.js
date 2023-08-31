/**
 * URL of this problem
 * https://leetcode.com/problems/teemo-attacking/
 */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
	let total = 0;

	for (let i = 0; i < timeSeries.length; i++) {
		timeSeries[i + 1] - timeSeries[i] < duration ? (total += timeSeries[i + 1] - timeSeries[i]) : (total += duration);
	}

	return total;
};
