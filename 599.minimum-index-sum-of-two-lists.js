/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
	let result = [];
	let sum = Infinity;

	for (let i = 0; i < list1.length; i++) {
		for (let j = 0; j < list2.length; j++) {
			if (list1[i] === list2[j]) {
				let tempSum = i + j;
				if (tempSum < sum) {
					sum = tempSum;
					result = [];
					result.push(list1[i]);
				} else if (tempSum === sum) {
					result.push(list1[i]);
				}
			}
		}
	}

	return result;
};
