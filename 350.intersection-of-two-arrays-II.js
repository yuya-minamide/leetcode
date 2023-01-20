/**
 * URL of this problem
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	const Num1Map = new Map();
	const Num2Map = new Map();
	const Result = [];

	for (let i = 0; i < nums1.length; i++) {
		Num1Map.set(nums1[i], Num1Map.get(nums1[i]) + 1 || 1);
	}
	for (let i = 0; i < nums2.length; i++) {
		Num2Map.set(nums2[i], Num2Map.get(nums2[i]) + 1 || 1);
	}

	Num1Map.forEach((value, key) => {
		if (Num2Map.has(key)) {
			let intersect = Math.min(Num1Map.get(key), Num2Map.get(key));
			while (intersect > 0) {
				Result.push(key);
				intersect--;
			}
		}
	});

	return Result;
};
