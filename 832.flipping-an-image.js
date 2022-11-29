/**
 * URL of this problem
 * https://leetcode.com/problems/flipping-an-image/
 */

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
	const Result = [];

	for (let i = 0; i < image.length; i++) {
		image[i].reverse();
		const ReplacedNums = [];
		for (let j = 0; j < image[i].length; j++) {
			if (image[i][j] === 0) {
				ReplacedNums.push(1);
			} else if (image[i][j] === 1) {
				ReplacedNums.push(0);
			}
		}
		Result.push(ReplacedNums);
	}

	return Result;
};
