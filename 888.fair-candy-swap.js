/**
 * URL of this problem
 * https://leetcode.com/problems/fair-candy-swap/
 */

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
	const Result = [];

	let SamOfAlice = aliceSizes.reduce((acc, cur) => acc + cur, 0);
	let SamOfBob = bobSizes.reduce((acc, cur) => acc + cur, 0);
	const Def = SamOfAlice - SamOfBob;

	for (let i = 0; i < aliceSizes.length; i++) {
		for (let j = 0; j < bobSizes.length; j++) {
			if (aliceSizes[i] - bobSizes[j] === Def / 2) {
				Result.push(aliceSizes[i], bobSizes[j]);
				return Result;
			}
		}
	}

	return Result;
};
