/**
 * URL of this problem
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let sign = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			return 0;
		} else {
			sign *= nums[i];
		}
	}

	return sign < 0 ? -1 : 1;
};
