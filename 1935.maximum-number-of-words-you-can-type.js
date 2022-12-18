/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
	const TextArr = text.split(" ");
	const BrokenLettersArr = [...brokenLetters];

	// Extract words that don't contain broken letters
	const GreatWords = TextArr.filter((word) => {
		return BrokenLettersArr.every((letter) => !word.includes(letter));
	});

	return GreatWords.length;
};
