/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
	let recolorCounter = Infinity;

	for (let i = 0; i <= blocks.length - k; i++) {
		const TempArr = blocks.substring(i, i + k).split("");
		const WhiteCount = TempArr.filter((color) => color === "W").length;

		recolorCounter = Math.min(recolorCounter, WhiteCount);
	}

	return recolorCounter;
};
