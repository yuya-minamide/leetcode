/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-highest-altitude/
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
	let highestAltitude = 0;
	let measurement = 0;

	for (let i = 0; i < gain.length; i++) {
		measurement += gain[i];
		if (highestAltitude < measurement) highestAltitude = measurement;
	}

	return highestAltitude;
};
