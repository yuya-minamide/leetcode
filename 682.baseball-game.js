/**
 * URL of this problem
 * https://leetcode.com/problems/baseball-game/
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
	const TempArr = [];

	for (let i = 0; i < operations.length; i++) {
		// Last number of TempArr
		const LastNum = TempArr[TempArr.length - 1];
		// Second number from the end of TempArr
		const SecondNumFromEnd = TempArr[TempArr.length - 2];

		switch (operations[i]) {
			case "+": {
				TempArr.push(LastNum + SecondNumFromEnd);
				break;
			}
			case "D": {
				TempArr.push(LastNum * 2);
				break;
			}
			case "C": {
				TempArr.pop();
				break;
			}
			default: {
				TempArr.push(Number(operations[i]));
				break;
			}
		}
	}

	return TempArr.reduce((acc, cur) => acc + cur, 0);
};
