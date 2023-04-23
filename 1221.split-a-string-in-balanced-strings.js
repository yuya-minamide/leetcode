/**
 * URL of this problem
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let counter = 0;
	let balancedStrNum = 0;

	for (let i = 0; i < s.length; i++) {
		switch (s.charAt(i)) {
			case "R":
				counter++;
				break;
			case "L":
				counter--;
				break;
		}

		if (counter === 0) balancedStrNum++;
	}

	return balancedStrNum;
};
