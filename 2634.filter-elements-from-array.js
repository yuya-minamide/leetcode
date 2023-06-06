/**
 * URL of this problem
 * https://leetcode.com/problems/filter-elements-from-array/
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	const Result = [];

	for (let i = 0; i < arr.length; i++) {
		const CurrentItem = fn(arr[i], i);
		if (CurrentItem) Result.push(arr[i]);
	}

	return Result;
};
