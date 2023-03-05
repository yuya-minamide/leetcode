/**
 * URL of this problem
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
	let maxOneLeng = 0;
	let maxZeroLeng = 0;
	let oneCounter = 0;
	let zeroCounter = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1") {
			zeroCounter = 0;
			oneCounter++;
			if (oneCounter > maxOneLeng) maxOneLeng = oneCounter;
		} else {
			oneCounter = 0;
			zeroCounter++;
			if (zeroCounter > maxZeroLeng) maxZeroLeng = zeroCounter;
		}
	}

	return maxOneLeng > maxZeroLeng;
};
