/**
 * URL of this problem
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
	const SortedArr = arr.sort((a, b) => a - b);
	const DifNum = arr[1] - arr[0];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] != DifNum) return false;
	}

	return true;
};
