/**
 * URL of this problem
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
	const NumMap = new Map();
	// If there is no lucky number, return -1
	const LuckyNum = [-1];

	for (let i = 0; i < arr.length; i++) {
		NumMap.set(arr[i], (NumMap.get(arr[i]) || 0) + 1);
	}
	NumMap.forEach((value, key) => {
		if (value === key) LuckyNum.push(key);
	});

	return Math.max(...LuckyNum);
};
