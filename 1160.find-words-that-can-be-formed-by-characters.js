/**
 * URL of this problem
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
	const CharMap = new Map();
	for (let i = 0; i < chars.length; i++) {
		CharMap.set(chars[i], (CharMap.get(chars[i]) ?? 0) + 1);
	}

	let counter = 0;
	for (let i = 0; i < words.length; i++) {
		const NewMap = new Map(CharMap);
		const CommonWord = words[i].split("").every((char) => {
			return NewMap.get(char) > 0 ? NewMap.set(char, NewMap.get(char) - 1) : false;
		});

		if (CommonWord) counter += words[i].length;
	}

	return counter;
};
