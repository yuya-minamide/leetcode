/**
 * URL of this problem
 * https://leetcode.com/problems/goat-latin/
 */

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
	const vowels = "aeiou";
	const sentenceArr = sentence.split(" ");

	for (let i = 0; i < sentenceArr.length; i++) {
		if (vowels.includes(sentenceArr[i][0].toLowerCase())) {
			sentenceArr[i] += "ma";
		} else {
			const firstLetter = sentenceArr[i][0];
			sentenceArr[i] = sentenceArr[i].replace(firstLetter, "") + firstLetter + "ma";
		}
		sentenceArr[i] += "a".repeat(i + 1);
	}

	return sentenceArr.join(" ");
};
