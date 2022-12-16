/**
 * URL of this problem
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 */

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
	const CharMap = new Map();

	for (let i = 0; i < s.length; i++) {
		if (CharMap[s[i]] === undefined) {
			CharMap[s[i]] = 1;
		} else {
			CharMap[s[i]] += 1;
			if (CharMap[s[i]] === 2) {
				return s[i];
			}
		}
	}
};
