/**
 * URL of this problem
 * https://leetcode.com/problems/sort-array-by-parity/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	const EvenNums = nums.filter((num) => num % 2 === 0);
	const OddNums = nums.filter((num) => num % 2 === 1);

	return EvenNums.concat(OddNums);
};
