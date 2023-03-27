/**
 * URL of this problem
 * https://leetcode.com/problems/single-number-iii/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	const NumMap = new Map();

	nums.forEach((num) => {
		NumMap.set(num, (NumMap.get(num) ?? 0) + 1);
	});

	// Find the numbers that appear only once
	const singleNumArr = [];
	NumMap.forEach((count, num) => {
		if (count === 1) singleNumArr.push(num);
	});

	return singleNumArr;
};
