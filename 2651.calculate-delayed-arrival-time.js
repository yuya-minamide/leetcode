/**
 * URL of this problem
 * https://leetcode.com/problems/calculate-delayed-arrival-time/
 */

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
	const resultTime = arrivalTime + delayedTime;

	if (resultTime >= 24) return resultTime - 24;

	return resultTime;
};
