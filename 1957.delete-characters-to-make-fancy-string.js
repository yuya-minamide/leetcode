/**
 * URL of this problem
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
	const CopyedS = [...s];

	for (let i = 0; i < CopyedS.length - 2; i++) {
		if (CopyedS[i] === CopyedS[i + 1] && CopyedS[i + 1] === CopyedS[i + 2]) CopyedS[i] = "";
	}

	return CopyedS.join("");
};
