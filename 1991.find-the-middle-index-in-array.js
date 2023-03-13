/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
	let leftArr = 0;
	const Sum = nums.reduce((acc, cur) => acc + cur);

	for (let i = 0; i < nums.length; i++) {
		if (Sum - leftArr - nums[i] === leftArr) return i;
		leftArr += nums[i];
	}

	return -1;
};
