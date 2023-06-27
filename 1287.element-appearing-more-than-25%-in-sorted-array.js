/**
 * URL of this problem
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
	const NumMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		NumMap.set(arr[i], (NumMap.get(arr[i]) ?? 0) + 1);
	}

	for (const [key, value] of NumMap.entries()) {
		if (`${value}` / arr.length > 0.25) return `${key}`;
	}
};
