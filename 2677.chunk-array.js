/**
 * URL of this problem
 * https://leetcode.com/problems/chunk-array/
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
	if (size === 0 || arr.length === 0) return [];

	const ChunkedArr = [];

	for (let i = 0; i < arr.length; i += size) {
		ChunkedArr.push(arr.slice(i, i + size));
	}

	return ChunkedArr;
};
