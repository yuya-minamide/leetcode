/**
 * URL of this problem
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	const sortedNums = [...new Set(nums.sort((a, b) => a - b))];
	const result = [];
	let counter = 0;

	for (let i = 1; i <= nums.length; i++) {
		i !== sortedNums[counter] ? result.push(i) : counter++;
	}

	return result;
};
