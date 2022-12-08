/**
 * URL of this problem
 * https://leetcode.com/problems/sum-of-unique-elements/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
	const UniqueNums = [];
	const NumsMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		NumsMap.set(nums[i], (NumsMap.get(nums[i]) ?? 0) + 1);
	}

	NumsMap.forEach((value, key) => {
		if (value === 1) UniqueNums.push(key);
	});

	return UniqueNums.reduce((acc, cur) => acc + cur, 0);
};
