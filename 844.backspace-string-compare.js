/**
 * URL of this problem
 * https://leetcode.com/problems/backspace-string-compare/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
	const FixedS = makeBackspace(s);
	const FixedT = makeBackspace(t);

	if (FixedS.length !== FixedT.length) return false;

	for (let i = 0; i < FixedS.length; i++) {
		if (FixedS[i] !== FixedT[i]) return false;
	}

	return true;
};

const makeBackspace = function (word) {
	const TempArr = [];

	for (let i = 0; i < word.length; i++) {
		word[i] !== "#" ? TempArr.push(word[i]) : TempArr.pop();
	}

	return TempArr.join("");
};
