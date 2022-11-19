/**
 * URL of this problem
 * https://leetcode.com/problems/can-place-flowers/
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let counter = 0;

	for (let i = 0; i < flowerbed.length; i++) {
		if (flowerbed[i] === 0) {
			if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
				flowerbed[i] = 1;
				counter++;
			}
		}
	}

	return counter >= n;
};
