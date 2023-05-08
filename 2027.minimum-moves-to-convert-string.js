/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-moves-to-convert-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
	const StrLeng = s.length;
	let result = 0;

	for (let i = 0; i < StrLeng; ) {
		const Char = s[i];
		if (Char === "O") i++;
		else {
			result++;
			i += 3;
		}
	}

	return result;
};
