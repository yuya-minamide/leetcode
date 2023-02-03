/**
 * URL of this problem
 * https://leetcode.com/problems/water-bottles/
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
	let counter = numBottles;

	while (numBottles >= numExchange) {
		counter += Math.floor(numBottles / numExchange);
		numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
	}

	return counter;
};
