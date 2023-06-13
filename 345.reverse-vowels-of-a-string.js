/**
 * URL of this problem
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const Vowels = ["a", "e", "i", "o", "u"];
	const TempStr = s.split("");
	let left = 0;
	let right = TempStr.length - 1;

	while (left < right) {
		if (!Vowels.includes(TempStr[left].toLowerCase())) {
			left++;
			continue;
		}
		if (!Vowels.includes(TempStr[right].toLowerCase())) {
			right--;
			continue;
		}
		let temp = TempStr[left];
		TempStr[left] = TempStr[right];
		TempStr[right] = temp;
		left++;
		right--;
	}

	return TempStr.join("");
};
