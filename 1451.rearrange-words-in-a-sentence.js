/**
 * URL of this problem
 * https://leetcode.com/problems/rearrange-words-in-a-sentence/
 */

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
	const LowerCaseText = text.slice(0, 1).toLowerCase() + text.slice(1);
	const textArr = LowerCaseText.split(" ");
	const sortedText = textArr.sort((a, b) => a.length - b.length);
	const stringText = sortedText.join(" ");
	return stringText.slice(0, 1).toUpperCase() + stringText.slice(1);
};
