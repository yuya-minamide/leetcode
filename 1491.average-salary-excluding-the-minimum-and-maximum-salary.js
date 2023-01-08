/**
 * URL of this problem
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	const MaxNum = Math.max(...salary);
	const MinNum = Math.min(...salary);
	let sum = salary.reduce((a, b) => a + b);

	sum -= MaxNum;
	sum -= MinNum;

	return sum / (salary.length - 2);
};
