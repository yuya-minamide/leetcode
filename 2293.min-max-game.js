/**
 * URL of this problem
 * https://leetcode.com/problems/min-max-game/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
	let numsArr = [...nums];

	while (numsArr.length >= 2) {
		const newNums = [];

		for (let i = 0; i < numsArr.length / 2; i++) {
			if (i % 2 === 0) {
				newNums[i] = Math.min(numsArr[2 * i], numsArr[2 * i + 1]);
			} else {
				newNums[i] = Math.max(numsArr[2 * i], numsArr[2 * i + 1]);
			}
		}

		numsArr = newNums;
	}

	return numsArr[0];
};
