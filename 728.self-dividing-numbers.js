/**
 * URL of this problem
 * https://leetcode.com/problems/find-the-pivot-integer/
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	let counter = 0;
	const Result = [];

	for (let i = left; i <= right; i++) {
		// Split digits and check self-dividing or not
		i.toString()
			.split("")
			.forEach((num) => {
				if (i % num != 0) counter++;
			});
		if (counter === 0) Result.push(i);
		counter = 0;
	}

	return Result;
};
