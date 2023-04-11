/**
 * URL of this problem
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const HashMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let result = 0;
	let curNum = 0;
	let preNum = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		curNum = HashMap[s[i]];
		curNum < preNum ? (result -= curNum) : (result += curNum);
		preNum = curNum;
	}

	return result;
};
