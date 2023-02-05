/**
 * URL of this problem
 * https://leetcode.com/problems/perfect-number/
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
	const TempArr = [];

	for (let i = 1; i < num; i++) {
		if (num % i === 0) TempArr.push(i);
	}

	return TempArr.reduce((acc, cur) => acc + cur, 0) === num;
};
