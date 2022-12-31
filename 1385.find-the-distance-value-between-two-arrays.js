/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
	let result = arr1.length;

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (Math.abs(arr1[i] - arr2[j]) <= d) {
				result--;
				break;
			}
		}
	}

	return result;
};
