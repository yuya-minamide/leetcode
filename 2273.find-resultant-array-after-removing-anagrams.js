/**
 * URL of this problem
 * https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
	for (let i = 1; i < words.length; i++) {
		let curWord = words[i].split("").sort().join("");
		let preWord = words[i - 1].split("").sort().join("");
		if (curWord === preWord) {
			words.splice(i, 1);
			i--;
		}
	}

	return words;
};
