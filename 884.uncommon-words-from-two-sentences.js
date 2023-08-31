/**
 * URL of this problem
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
	const s1Arr = s1.split(" ");
	const s2Arr = s2.split(" ");
	const mixedwords = s1Arr.concat(s2Arr);
	const sMap = new Map();
	const uncommonWords = [];

	for (let i = 0; i < mixedwords.length; i++) {
		sMap.set(mixedwords[i], (sMap.get(mixedwords[i]) || 0) + 1);
	}

	sMap.forEach((count, word) => {
		if (count === 1) {
			uncommonWords.push(word);
		}
	});

	return uncommonWords;
};
