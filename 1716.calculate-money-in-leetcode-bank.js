/**
 * URL of this problem
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
	let countedDay = 0;
	let countedMonday = 0;
	let total = 0;

	for (let i = 1; i <= n; i++) {
		if (i % 7 === 0) {
			countedMonday++;
			total += countedDay + countedMonday;
			countedDay = 0;
		} else {
			countedDay++;
			total += countedDay + countedMonday;
		}
	}
	return total;
};
