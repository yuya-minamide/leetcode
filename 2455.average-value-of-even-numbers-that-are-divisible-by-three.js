/**
 * URL of this problem
 * https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
	const EvenNums = nums.filter((num) => num % 2 === 0);
	const DivisibleThreeNums = EvenNums.filter((num) => num % 3 === 0);

	if (DivisibleThreeNums.length === 0) return 0;
	if (DivisibleThreeNums.length === 1) return DivisibleThreeNums[0];

	const sum = DivisibleThreeNums.reduce((sum, cur) => sum + cur, 0);

	return Math.floor(sum / DivisibleThreeNums.length);
};
