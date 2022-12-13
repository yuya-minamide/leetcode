/**
 * URL of this problem
 * https://leetcode.com/problems/convert-the-temperature/
 */

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
	const UniqueChar = [];
	const CharMap = new Map();

	arr.forEach((char) => {
		CharMap.set(char, (CharMap.get(char) || 0) + 1);
	});

	CharMap.forEach((value, key) => {
		if (value === 1) UniqueChar.push(key);
	});

	return UniqueChar[k - 1] || "";
};
