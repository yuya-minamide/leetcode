/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
	while (sandwiches.length !== 0) {
		if (students[0] === sandwiches[0]) {
			students.shift();
			sandwiches.shift();
		} else {
			students.push(students.shift());
		}
		if (!students.includes(sandwiches[0])) {
			return students.length;
		}
	}

	return students.length;
};
