/**
 * URL of this problem
 * https://leetcode.com/problems/get-maximum-in-generated-array/
 */

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
	const Nums = new Array(n + 1);

	for (let i = 0; i < n + 1; i++) {
		if (i === 0 || i === 1) Nums[i] = i;

		i % 2 === 0 ? (Nums[i] = Nums[i / 2]) : (Nums[i] = Nums[Math.floor(i / 2)] + Nums[Math.floor(i / 2) + 1]);
	}

	return Math.max(...Nums);
};
