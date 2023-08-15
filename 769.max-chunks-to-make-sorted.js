/**
 * URL of this problem
 * https://leetcode.com/problems/max-chunks-to-make-sorted/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
	let chanks = 0;
	let maxNum = 0;

	for (let i = 0; i < arr.length; i++) {
		maxNum = Math.max(maxNum, arr[i]);
		if (i >= maxNum) chanks++;
	}

	return chanks;
};
