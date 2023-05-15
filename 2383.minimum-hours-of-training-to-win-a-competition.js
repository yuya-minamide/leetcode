/**
 * URL of this problem
 * https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/
 */

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
	let minHour = 0;

	for (let i = 0; i < energy.length; i++) {
		if (energy[i] >= initialEnergy) {
			minHour += energy[i] - initialEnergy + 1;
			initialEnergy = 1;
		} else {
			initialEnergy -= energy[i];
		}
		if (experience[i] < initialExperience) {
			initialExperience += experience[i];
		} else {
			minHour += experience[i] - initialExperience + 1;
			initialExperience += experience[i] + experience[i] - initialExperience + 1;
		}
	}

	return minHour;
};
