/**
 * URL of this problem
 * https://leetcode.com/problems/complement-of-base-10-integer/
 */

/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
	const NArr = n.toString(2).split("");

	for (let i = 0; i < NArr.length; i++) {
		NArr[i] === "0" ? (NArr[i] = "1") : (NArr[i] = "0");
	}

	return parseInt(NArr.join(""), 2);
};
