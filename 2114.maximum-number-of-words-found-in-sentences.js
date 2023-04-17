/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	let counter = 0;

	for (let i = 0; i < sentences.length; i++) {
		const wordLeng = sentences[i].split(" ").length;
		if (counter < wordLeng) counter = wordLeng;
	}

	return counter;
};
