/**
 * URL of this problem
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	//Extract the first letter that is larger than target from letters. Returns the first letter in letters if it does not exist
	return letters.find((letter) => letter.charCodeAt(0) > target.charCodeAt(0)) ?? letters[0];
};
