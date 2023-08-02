/**
 * URL of this problem
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
	const average = arr.reduce((acc, cur) => acc + cur) / 3;
	let subSum = 0;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		subSum += arr[i];

		if (subSum === average) {
			count++;
			subSum = 0;
		}
	}

	return count > 2;
};
