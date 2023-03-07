/**
 * URL of this problem
 * https://leetcode.com/problems/sort-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	// Use built-in
	// return nums.sort((a, b) => a - b)

	// without using built-in
	for (let i = 1; i < nums.length; i++) {
		const temp = nums[i];
		let j = i - 1;
		while (j >= 0 && nums[j] > temp) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = temp;
	}

	return nums;
};
