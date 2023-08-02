/**
 * URL of this problem
 * https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
	let hillOrValley = 0; //1 = hill, 2 = valley
	let result = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			if (hillOrValley === -1) result++;
			hillOrValley = 1;
		} else if (nums[i] < nums[i - 1]) {
			if (hillOrValley === 1) result++;
			hillOrValley = -1;
		}
	}

	return result;
};
