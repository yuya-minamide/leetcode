/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-unequal-triplets-in-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) counter++;
			}
		}
	}

	return counter;
};
