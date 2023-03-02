/**
 * URL of this problem
 * https://leetcode.com/problems/distribute-candies/
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
	const DifTypeOfNum = [...new Set(candyType)].length;
	const MaxNum = candyType.length / 2;

	if (DifTypeOfNum >= MaxNum) return MaxNum;
	else return DifTypeOfNum;
};
