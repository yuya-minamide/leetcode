/**
 * URL of this problem
 * https://leetcode.com/problems/day-of-the-year/
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
	return (new Date(date) - new Date(date.slice(0, 4))) / (1000 * 60 * 60 * 24) + 1;
};
