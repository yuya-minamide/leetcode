/**
 * URL of this problem
 * https://leetcode.com/problems/time-needed-to-buy-tickets/
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
	let seconds = 0;

	while (tickets[k] > 0) {
		for (let i = 0; i < tickets.length; i++) {
			if (tickets[k] === 0) break;
			if (tickets[i] > 0) {
				tickets[i]--;
				seconds++;
			}
		}
	}

	return seconds;
};
