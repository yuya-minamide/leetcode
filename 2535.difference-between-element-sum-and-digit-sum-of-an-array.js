/**
 * URL of this problem
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
	let elementSum = nums.reduce((a, b) => a + b, 0);

	let copyNums = [...nums];
	for (let i = 0; i < copyNums.length; i++) {
		if (copyNums[i] > 9) copyNums[i] = copyNums[i].toString().split("");
	}
	copyNums = copyNums.flat();

	let digitSum = copyNums.reduce((a, b) => Number(a) + Number(b), 0);

	return Math.abs(elementSum - digitSum);
};
