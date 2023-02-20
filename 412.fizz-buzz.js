/**
 * URL of this problem
 * https://leetcode.com/problems/fizz-buzz/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	const Result = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) Result.push("FizzBuzz");
		else if (i % 5 === 0) Result.push("Buzz");
		else if (i % 3 === 0) Result.push("Fizz");
		else Result.push(i.toString());
	}

	return Result;
};
