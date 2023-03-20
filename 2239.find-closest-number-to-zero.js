/**
 * URL of this problem
 * https://leetcode.com/problems/find-closest-number-to-zero/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
	const CloseNum = Math.min(...nums.map((num) => Math.abs(num)));
	return nums.filter((num) => num === CloseNum).length !== 0 ? CloseNum : -CloseNum;
};
