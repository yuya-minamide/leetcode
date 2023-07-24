/**
 * URL of this problem
 * https://leetcode.com/problems/optimal-partition-of-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
	const seen = new Set();
	let partitions = 0;

	for (let i = 0; i < s.length; i++) {
		if (!seen.has(s[i])) {
			seen.add(s[i]);
		} else {
			partitions++;
			seen.clear();
			seen.add(s[i]);
		}
	}

	if (seen.size > 0) partitions++;

	return partitions;
};
