/**
 * URL of this problem
 * https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
	let left = startIndex;
	let right = startIndex;
	let step = 0;
	let wordLeng = words.length;

	while (step <= wordLeng) {
		if (words[left] === target || words[right] === target) {
			return step;
		} else {
			right = (right + 1) % wordLeng;
			left = (left - 1 + wordLeng) % wordLeng;
			step++;
		}
	}

	return -1;
};
