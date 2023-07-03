/**
 * URL of this problem
 * https://leetcode.com/problems/three-consecutive-odds/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	let counter = 1;

	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] % 2 === 1) {
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] % 2 === 1) {
					counter++;
					if (counter >= 3) return true;
				} else if (arr[j] % 2 === 0) {
					counter = 0;
				}
			}
		}
	}

	return false;
};
