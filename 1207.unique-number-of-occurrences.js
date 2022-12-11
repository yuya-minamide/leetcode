/**
 * URL of this problem
 * https://leetcode.com/problems/convert-the-temperature/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const NumsMap = new Map();

	arr.forEach((num) => {
		NumsMap.set(num, (NumsMap.get(num) || 0) + 1);
	});

	return NumsMap.size === new Set(NumsMap.values()).size;
};
