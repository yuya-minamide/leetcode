/**
 * URL of this problem
 * https://leetcode.com/problems/pancake-sorting/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
	const result = [];

	for (let n = arr.length; n > 0; n--) {
		const target = arr.findIndex((pancake) => pancake === n);
		reversePancake(0, target, arr);
		result.push(target + 1);
		reversePancake(0, n - 1, arr);
		result.push(n);
	}
	return result;
};

const reversePancake = (start, end, arr) => {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start += 1;
		end -= 1;
	}
};
