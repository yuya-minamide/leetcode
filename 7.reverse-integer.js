/**
 * URL of this problem
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	const XArr = x.toString().split("");
	const ReverseNumArr = [];

	if (XArr[0] === "-") ReverseNumArr.push(XArr[0]);

	for (let i = XArr.length - 1; i >= 0; i--) {
		if (XArr[i] !== "-" && "0") ReverseNumArr.push(XArr[i]);
	}

	const ReverseNum = ReverseNumArr.join("");
	return ReverseNum > Math.pow(2, 31) || ReverseNum < Math.pow(-2, 31) ? 0 : ReverseNum;
};
