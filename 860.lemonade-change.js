/**
 * URL of this problem
 * https://leetcode.com/problems/lemonade-change/
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let fiveDollars = 0;
	let tenDollars = 0;

	for (let i = 0; i < bills.length; i++) {
		switch (bills[i]) {
			case 5:
				fiveDollars++;
				break;
			case 10:
				fiveDollars--;
				tenDollars++;
				break;
			case 20:
				if (tenDollars > 0) {
					fiveDollars--;
					tenDollars--;
				} else {
					fiveDollars -= 3;
				}
		}

		if (fiveDollars < 0) return false;
	}

	return true;
};
