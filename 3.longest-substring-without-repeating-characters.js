/**
 * URL of this problem
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let charArr = [];
	const LengArr = [];

	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			if (!charArr.includes(s[j])) {
				charArr.push(s[j]);
			} else {
				LengArr.push(charArr.length);
				charArr = [];
				break;
			}
		}
	}
	LengArr.push(charArr.length);

	return Math.max(...LengArr);
};
