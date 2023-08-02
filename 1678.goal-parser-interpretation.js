/**
 * URL of this problem
 * https://leetcode.com/problems/goal-parser-interpretation/
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
	const result = [];

	for (let i = 0; i < command.length; i++) {
		if (command[i] !== "(" && command[i] !== ")") result.push(command[i]);
		if (command[i] === "(" && command[i + 1] === ")") {
			result.push("o");
			i++;
		}
	}

	return result.join("");
};
