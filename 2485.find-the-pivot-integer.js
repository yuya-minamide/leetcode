/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-pivot-integer/
 */

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
	let totalSam = 0;
	let removedSam = 0;

	// Total sum
	for (let x = 1; x <= n; x++) {
		totalSam += x;
	}

	// Figure out pivot integer
	for (let x = 1; x <= n; x++) {
		if (totalSam === removedSam + x) {
			return x;
		} else {
			totalSam -= x;
			removedSam += x;
		}
	}
	return -1;
};
