/**
 * URL of this problem
 * https://leetcode.com/problems/increasing-decreasing-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	const SArr = s.split("").sort();
	const ExistedChar = [...new Set(SArr)];
	const Result = [];

	while (Result.length < s.length) {
		for (let i = 0; i < ExistedChar.length; i++) {
			if (SArr.includes(ExistedChar[i])) {
				Result.push(ExistedChar[i]);
				SArr.splice(SArr.indexOf(ExistedChar[i]), 1);
			}
		}

		for (let i = ExistedChar.length - 1; i >= 0; i--) {
			if (SArr.includes(ExistedChar[i]) && ExistedChar[i] > Result[Result.length - 1]) {
				Result.push(ExistedChar[i]);
				SArr.splice(SArr.indexOf(ExistedChar[i]), 1);
			}
		}

		for (let i = ExistedChar.length - 1; i >= 0; i--) {
			if (SArr.includes(ExistedChar[i])) {
				Result.push(ExistedChar[i]);
				SArr.splice(SArr.indexOf(ExistedChar[i]), 1);
			}
		}

		for (let i = 0; i < ExistedChar.length; i++) {
			if (SArr.includes(ExistedChar[i]) && ExistedChar[i] < Result[Result.length - 1]) {
				Result.push(ExistedChar[i]);
				SArr.splice(SArr.indexOf(ExistedChar[i]), 1);
			}
		}
	}

	return Result.join("");
};
