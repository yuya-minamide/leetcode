/**
 * URL of this problem
 * https://leetcode.com/problems/day-of-the-week/
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
	const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return Days[new Date(`${month}/${day}/${year}`).getDay()];
};
