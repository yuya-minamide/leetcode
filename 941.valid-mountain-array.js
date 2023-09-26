/**
 * URL of this problem
 * https://leetcode.com/problems/valid-mountain-array/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
	let upDown = true;

	if (arr.length < 3 || arr[0] >= arr[1]) return false;

	for (let i = 0; i < arr.length - 1; i++) {
		if (upDown && arr[i] > arr[i + 1]) {
			upDown = false;
		} else if ((!upDown && arr[i] <= arr[i + 1]) || arr[i] === arr[i + 1]) {
			return false;
		}
	}

	return !upDown;
};
